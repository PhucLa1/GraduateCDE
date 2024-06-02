using authen_service.Dtos.UserDtos;
using authen_service.EmailSend;
using authen_service.Entities;
using authen_service.Helpers;
using authen_service.Models;
using authen_service.Repositories.IRepo;
using authen_service.Services.ISers;
using authen_service.unitOfWork;
using AutoMapper;
using Google.Apis.Auth;
using JWTAuthencation.Models.OtherModels;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace authen_service.Services.Sers
{
    public class AuthService : IAuthService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IUserRepository userRepository;
        private readonly IMapper _mapper;
        private readonly IConfiguration _configuration;
        private readonly HttpClient _httpClient;
        private readonly IEmailSender _emailSender;

        public AuthService(IUnitOfWork unitOfWork, IMapper mapper, IConfiguration configuration, HttpClient httpClient, IEmailSender emailSender)
        {
            _unitOfWork = unitOfWork;
            userRepository = unitOfWork.UserRepository;
            _mapper = mapper;
            _configuration = configuration;
            _httpClient = httpClient;
            _emailSender = emailSender;
        }

        public async Task<ApiResponse<String>> SignUp(UserSignupDto userSignup)
        {
            try
            {
                bool isUserExist = await userRepository.IsEmailExist(userSignup.Email);
                if (userSignup.RePassword != userSignup.Password)
                {
                    return ApiResponse<String>.Failed("Password not compare repassword");
                }
                if (isUserExist)
                {
                    return ApiResponse<String>.Failed("Email has exist");
                }
                if (InvalidString.IsInvalidPassword(userSignup.Password))
                {
                    return ApiResponse<String>.Failed("Password not malformed");
                }

                User user = _mapper.Map<User>(userSignup);
                user.Password = HashString.EncodePassMD5(user.Password);
                await userRepository.AddAsync(user);
                await _unitOfWork.SaveAsync();
                await SendEmail(user.Email);
                string token = await JWTGenerator(user);
                return ApiResponse<String>.Success(token, "Sign up successfully");
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<ApiResponse<String>> FacebookLogin(string credential)
        {
            try
            {
                string? appId = _configuration["Facebook:AppId"];
                string? appSecret = _configuration["Facebook:AppSecret"];
                HttpResponseMessage debugTokenResponse = await _httpClient.GetAsync($"https://graph.facebook.com/debug_token?input_token={credential}&access_token={appId}|{appSecret}");
                var stringThing = await debugTokenResponse.Content.ReadAsStringAsync();
                var userOBJK = JsonConvert.DeserializeObject<FacebookTokenValidationResult>(stringThing);

                if (!userOBJK.Data.IsValid)
                {
                    return ApiResponse<String>.Failed("The data not correct");
                }
                HttpResponseMessage meResponse = await _httpClient.GetAsync($"https://graph.facebook.com/me?fields=first_name,last_name,picture,email&access_token={credential}");
                var userContent = await meResponse.Content.ReadAsStringAsync();
                var userContentObj = JsonConvert.DeserializeObject<FacebookUserInfoResult>(userContent);

                bool isEmailExist = await userRepository.IsEmailExist(userContentObj.Email);
                User user = _mapper.Map<User>(userContentObj);
                if (!isEmailExist)
                {
                    user.Password = HashString.EncodePassMD5(user.Email + DateTime.UtcNow.ToString());
                    await userRepository.AddAsync(user);
                    await _unitOfWork.SaveAsync();
                    await SendEmail(user.Email);
                }
                string token = await JWTGenerator(user);
                return ApiResponse<String>.Success(token,"Login facebook successfully");
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<ApiResponse<String>> GoogleLogin(string credential)
        {
            try
            {
                var settings = new GoogleJsonWebSignature.ValidationSettings()
                {
                    Audience = new List<string> { _configuration["Google:ClientID"] }
                };
                var payload = await GoogleJsonWebSignature.ValidateAsync(credential, settings);
                bool isEmailExist = await userRepository.IsEmailExist(payload.Email);
                User user = new User()
                {
                    Email = payload.Email,
                    FirstName = payload.FamilyName,
                    LastName = payload.Name,
                    Password = HashString.EncodePassMD5(payload.Email + DateTime.UtcNow.ToString()),
                    Avatar = payload.Picture
                };
                if (!isEmailExist)
                {
                    await userRepository.AddAsync(user);
                    await _unitOfWork.SaveAsync();
                    await SendEmail(user.Email);
                }
                string token = await JWTGenerator(user);
                return ApiResponse<String>.Success(token,"Login google successfully") ;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        private async Task<string> JWTGenerator(User Result)
        {
            try
            {
                var claims = new[] {
                        new Claim(JwtRegisteredClaimNames.Name, _configuration["Jwt:Subject"]),
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                        new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                        new Claim("Email", Result.Email),
                        new Claim("FirstName", Result.FirstName),
                        new Claim("LastName", Result.LastName),
                    };

                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
                var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                var token = new JwtSecurityToken(
                    _configuration["Jwt:Issuer"],
                    _configuration["Jwt:Audience"],
                    claims,
                    expires: DateTime.UtcNow.AddDays(7),
                    signingCredentials: signIn);

                var encrypterToken = new JwtSecurityTokenHandler().WriteToken(token);
                return encrypterToken;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        private async Task SendEmail(String email)
        {
            Email emailSend = new Email()
            {
                To = email,
                Subject = "Sign up successfully",
                Body = "Sign up successfully",
            };
            await _emailSender.SendEmail(emailSend);
        }

        public async Task<ApiResponse<String>> Login(UserLoginDto userLoginDto)
        {
            try
            {
                User? user = await userRepository.FindUserByEmail(userLoginDto.Email);
                if (user == null)
                {
                    return ApiResponse<String>.Failed("Email has not exist");
                }
                if (user.Password != HashString.EncodePassMD5(userLoginDto.Password))
                {
                    return ApiResponse<String>.Failed("Password not correct");
                }

                string encrypterToken = await JWTGenerator(user);
                return ApiResponse<String>.Success(encrypterToken, "Sign in successfully");
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<ApiResponse<Boolean>> UpdatePassword(ResetPassword resetPassword)
        {
            try
            {
                if(resetPassword.Password != resetPassword.RePassword)
                {
                    return ApiResponse<Boolean>.Failed("Password not compare repassword");
                }
                if (InvalidString.IsInvalidPassword(resetPassword.Password))
                {
                    return ApiResponse<Boolean>.Failed("Password not malformed");
                }
                Boolean isChangePassword = await userRepository.ChangePassword(resetPassword);
                if (!isChangePassword)
                {
                    return ApiResponse<Boolean>.Failed("Email not correct");
                }
                await _unitOfWork.SaveAsync();
                return ApiResponse<Boolean>.Success(true,"Change password successfully"); ;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<ApiResponse<Boolean>> GenerateVerificationCode(string email)
        {
            try
            {
                string code = HashString.GenerateRandomCode();

                VerifyVerificationCodeRequest verifyVerificationCodeRequest = new VerifyVerificationCodeRequest()
                {
                    Email = email,
                    Code = code
                };
                Boolean isSendEmail = await userRepository.UpdateCodeAndTimeSend(verifyVerificationCodeRequest);
                if (isSendEmail)
                {
                    Email emailSend = new Email()
                    {
                        To = email,
                        Subject = "Verify code",
                        Body = verifyVerificationCodeRequest.Code,
                    };
                    await _emailSender.SendEmail(emailSend);
                    await _unitOfWork.SaveAsync();
                    return ApiResponse<Boolean>.Success(true,"Generate verify code successfully");
                }

                return ApiResponse<Boolean>.Failed("Email not exist"); ;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<ApiResponse<Boolean>> VerifyVerificationCode(VerifyVerificationCodeRequest verifyVerificationCodeRequest)
        {
            try
            {
                String IsCodeUnExpired = await userRepository.IsCodeUnExpired(verifyVerificationCodeRequest);
                if (IsCodeUnExpired == "")
                {
                    return ApiResponse<Boolean>.Success(true,"The code you enter is right");
                }
                return ApiResponse<Boolean>.Failed(IsCodeUnExpired);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}