using authen_service.Dtos.UserDtos;
using authen_service.Models;
using authen_service.Services.ISers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace authen_service.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost]
        [Route("sign-up")]
        public async Task<ActionResult<ApiResponse<Boolean>>> SignUp([FromForm] UserSignupDto userSignUp)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                String token = await _authService.SignUp(userSignUp);
                if (token == "")
                {
                    return BadRequest(ApiResponse<Boolean>.Failed("Sign up not successfully"));
                }
                SetJWT(token);
                return Ok(ApiResponse<Boolean?>.Success(null, "Sign up successfully"));
            }catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }

        [HttpPost]
        [Route("login")]
        public async Task<ActionResult<ApiResponse<Boolean>>> Login([FromForm] UserLoginDto userLogin)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                String token = await _authService.Login(userLogin);
                if (token != "")
                {
                    SetJWT(token);
                    return Ok(ApiResponse<Boolean?>.Success(null, "Login successfully"));
                }
                return BadRequest(ApiResponse<Boolean>.Failed("Login failed"));
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        [HttpPost]
        [Route("generate-code")]
        public async Task<ActionResult<ApiResponse<Boolean>>> GenerateVerificationCode(string email)
        {
            try
            {
                Boolean isSuccess = await _authService.GenerateVerificationCode(email);
                if (isSuccess)
                {
                    return Ok(ApiResponse<Boolean?>.Success(null, "Email reset password has sent"));
                }
                return BadRequest(ApiResponse<Boolean>.Failed("Email reset password can not be sent"));
            }
            catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }

        [HttpPost]
        [Route("verify-code")]
        public async Task<ActionResult<ApiResponse<Boolean>>> VerifyVerificationCode([FromForm]VerifyVerificationCodeRequest request)
        {
            Boolean isValid = await _authService.VerifyVerificationCode(request);
            if(isValid)
            {
                return Ok(ApiResponse<Boolean?>.Success(null, "The verify code you enter is right"));
            }
            return BadRequest(ApiResponse<Boolean>.Failed("The verify code you enter is wrong or expired"));
        }

        [HttpPost]
        [Route("reset-password")]
        public async Task<ActionResult<ApiResponse<Boolean>>> ResetPassword([FromForm]ResetPassword resetPassword)
        {
            Boolean isValid = await _authService.UpdatePassword(resetPassword);
            if (isValid)
            {
                return Ok(ApiResponse<Boolean?>.Success(null, "Change password successfully"));
            }
            return BadRequest(ApiResponse<Boolean>.Failed("Change password failed"));
        }

        [HttpPost]
        [Route("login-google")]
        public async Task<ActionResult<ApiResponse<Boolean>>> LoginGoogle(string credential)
        {
            try
            {
                String token = await _authService.GoogleLogin(credential);
                return Ok(ApiResponse<Boolean?>.Success(null, "Login successfully"));
            }catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        [HttpPost]
        [Route("login-facebook")]
        public async Task<ActionResult<ApiResponse<Boolean>>> LoginFacebook(string credential)
        {
            try
            {
                String token = await _authService.FacebookLogin(credential);
                if (token == "")
                {
                    return BadRequest(ApiResponse<Boolean>.Failed("Login facebook not successfully"));
                }
                SetJWT(token);
                return Ok(ApiResponse<Boolean?>.Success(null, "Login successfully"));
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }


        private void SetJWT(string encryptedToken)
        {
            HttpContext.Response.Cookies.Append("X-Access-Token", encryptedToken,
                 new CookieOptions
                 {
                     Expires = DateTime.UtcNow.AddMinutes(15),
                     HttpOnly = true,
                     Secure = true,
                     IsEssential = true,
                     SameSite = SameSiteMode.None
                 });
        }
    }
}