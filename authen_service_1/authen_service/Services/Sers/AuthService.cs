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

        public async Task<String> SignUp(UserSignupDto userSignup)
        {
            try
            {
                Boolean isUserValid = await userRepository.IsUserValid(userSignup);
                if (isUserValid)
                {
                    User user = _mapper.Map<User>(userSignup);
                    user.Password = HashString.EncodePassMD5(user.Password);
                    await userRepository.AddAsync(user);
                    await _unitOfWork.SaveAsync();
                    await SendEmail(user.Email);
                    return await JWTGenerator(user);
                }
                return "";
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<String?> FacebookLogin(string credential)
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
                    return "";
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
                return await JWTGenerator(user);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<String> GoogleLogin(string credential)
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
                    Password = HashString.EncodePassMD5(payload.Email + DateTime.UtcNow.ToString())
                };
                if (!isEmailExist)
                {
                    await userRepository.AddAsync(user);
                    await _unitOfWork.SaveAsync();
                    await SendEmail(user.Email);
                }
                return await JWTGenerator(user);
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

        public async Task<String> Login(UserLoginDto userLoginDto)
        {
            try
            {
                Boolean isUserExist = await userRepository.IsEmailExist(userLoginDto.Email);
                if (isUserExist)
                {
                    User user = await userRepository.GetUserByEmail(userLoginDto.Email);
                    String encrypterToken = await JWTGenerator(user);
                    return encrypterToken;
                }
                return "";
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<Boolean> UpdatePassword(ResetPassword resetPassword)
        {
            try
            {
                Boolean isChangePassword = await userRepository.ChangePassword(resetPassword);
                await _unitOfWork.SaveAsync();
                return isChangePassword;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<Boolean> GenerateVerificationCode(string email)
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
                    return true;
                }

                return false;
            }catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<Boolean> VerifyVerificationCode(VerifyVerificationCodeRequest verifyVerificationCodeRequest)
        {
            try
            {
                Boolean IsCodeExpired = await userRepository.IsCodeUnExpired(verifyVerificationCodeRequest);
                if (IsCodeExpired)
                {
                    return true;
                }
                return false;
            }catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}