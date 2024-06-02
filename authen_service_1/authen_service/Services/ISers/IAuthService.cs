using authen_service.Dtos.UserDtos;
using authen_service.Entities;
using authen_service.Models;

namespace authen_service.Services.ISers
{
    public interface IAuthService
    {
        Task<ApiResponse<String>> Login(UserLoginDto userLoginDto); 

        Task<ApiResponse<String>> SignUp(UserSignupDto userSignup);
        Task<ApiResponse<String>> FacebookLogin(string credential);
        Task<ApiResponse<String>> GoogleLogin(string credential);
        Task<ApiResponse<Boolean>> UpdatePassword(ResetPassword resetPassword);
        Task<ApiResponse<Boolean>> GenerateVerificationCode(string email);
        Task<ApiResponse<Boolean>> VerifyVerificationCode(VerifyVerificationCodeRequest verifyVerificationCodeRequest);
    }
}
