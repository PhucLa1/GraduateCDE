using authen_service.Dtos.UserDtos;
using authen_service.Entities;
using authen_service.Models;
using TestHarmonyAT.Repositories.Base;

namespace authen_service.Repositories.IRepo
{
    public interface IUserRepository:IBaseRepository<User>
    {

        Task<bool> IsEmailExist(string email);
        Task<User?> FindUserByEmail(string email);
        Task<Boolean> ChangePassword(ResetPassword resetPassword);
        Task<Boolean> UpdateCodeAndTimeSend(VerifyVerificationCodeRequest request);

        Task<String> IsCodeUnExpired(VerifyVerificationCodeRequest request);
    }
}
