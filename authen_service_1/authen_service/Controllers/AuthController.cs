using authen_service.Dtos.UserDtos;
using authen_service.Models;
using authen_service.Services.ISers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace authen_service.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]")]
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
                    return BadRequest(ApiResponse<Boolean>.Failed(ModelState));
                }
                ApiResponse<String> isSuccess = await _authService.SignUp(userSignUp);
                if (isSuccess.StatusCode != 200)
                {
                    return BadRequest(isSuccess);
                }
                SetJWT(isSuccess.Metadata);
                return Ok(isSuccess);
            }catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }

        [HttpPost]
        [Route("login")]
        public async Task<ActionResult<ApiResponse<String>>> Login([FromForm] UserLoginDto userLogin)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ApiResponse<Boolean>.Failed(ModelState));
                }
                ApiResponse<String> isSuccess = await _authService.Login(userLogin);
                if (isSuccess.StatusCode == 200)
                {
                    SetJWT(isSuccess.Metadata);
                    return Ok(isSuccess);
                }
                return BadRequest(isSuccess);
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
                ApiResponse<Boolean> isSuccess = await _authService.GenerateVerificationCode(email);
                if (isSuccess.StatusCode == 200)
                {
                    return Ok(isSuccess);
                }
                return BadRequest(isSuccess);
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
            if (!ModelState.IsValid)
            {
                return BadRequest(ApiResponse<Boolean>.Failed(ModelState));
            }
            ApiResponse<Boolean> isValid = await _authService.VerifyVerificationCode(request);
            if(isValid.StatusCode == 200)
            {
                return Ok(isValid);
            }
            return BadRequest(isValid);
        }

        [HttpPost]
        [Route("reset-password")]
        public async Task<ActionResult<ApiResponse<Boolean>>> ResetPassword([FromForm]ResetPassword resetPassword)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ApiResponse<Boolean>.Failed(ModelState));
            }
            ApiResponse<Boolean> isValid = await _authService.UpdatePassword(resetPassword);
            if (isValid.StatusCode == 200)
            {
                return Ok(isValid);
            }
            return BadRequest(isValid);
        }

        [HttpPost]
        [Route("login-google")]
        public async Task<ActionResult<ApiResponse<String>>> LoginGoogle(string credential)
        {
            try
            {
                return await _authService.GoogleLogin(credential);
            }catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        [HttpPost]
        [Route("login-facebook")]
        public async Task<ActionResult<ApiResponse<String>>> LoginFacebook(string credential)
        {
            try
            {
                ApiResponse<String> isLogin = await _authService.FacebookLogin(credential);
                if (isLogin.StatusCode != 200)
                {
                    return BadRequest(isLogin);
                }
                SetJWT(isLogin.Metadata);
                return Ok(isLogin);
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