using authen_service.Dtos.UserDtos;
using authen_service.Entities;
using authen_service.Models;
using TestHarmonyAT.Repositories.Base;

namespace authen_service.Repositories.IRepo
{
    public interface IUserRepository:IBaseRepository<User>
    {
        Task<bool> IsUserValid(UserSignupDto userSignUp);

        Task<bool> IsEmailExist(string email);
        Task<User> GetUserByEmail(string email);
        Task<Boolean> ChangePassword(ResetPassword resetPassword);
        Task<Boolean> UpdateCodeAndTimeSend(VerifyVerificationCodeRequest request);

        Task<Boolean> IsCodeUnExpired(VerifyVerificationCodeRequest request);
    }
}
