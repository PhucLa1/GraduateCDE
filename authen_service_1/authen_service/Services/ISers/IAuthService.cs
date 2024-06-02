using authen_service.Dtos.UserDtos;
using authen_service.Entities;
using authen_service.Models;

namespace authen_service.Services.ISers
{
    public interface IAuthService
    {
        Task<String> Login(UserLoginDto userLoginDto); 

        Task<String> SignUp(UserSignupDto userSignup);
        Task<String> FacebookLogin(string credential);
        Task<String> GoogleLogin(string credential);
        Task<Boolean> UpdatePassword(ResetPassword resetPassword);
        Task<Boolean> GenerateVerificationCode(string email);
        Task<Boolean> VerifyVerificationCode(VerifyVerificationCodeRequest verifyVerificationCodeRequest);
    }
}
