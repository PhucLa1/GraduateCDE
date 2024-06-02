using authen_service.Data;
using authen_service.Dtos.UserDtos;
using authen_service.Entities;
using authen_service.Helpers;
using authen_service.Models;
using authen_service.Repositories.IRepo;
using Microsoft.EntityFrameworkCore;
using TestHarmonyAT.Repositories.Base;

namespace authen_service.Repositories.Repo
{
    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        public UserRepository(AuthenServiceDbContext context) : base(context)
        {
        }


        public async Task<bool> IsUserValid(UserSignupDto userSignUp)
        {
            try
            {
                if(userSignUp.RePassword != userSignUp.Password)
                {
                    return false;
                }
                string email = userSignUp.Email;
                User? userExist = await _context.user.Where(user => user.Email == email).FirstOrDefaultAsync();
                if (userExist != null)
                {
                    return false;
                }
                if (InvalidString.IsInvalidPassword(userSignUp.Password))
                {
                    return false;
                }
                return true;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        public async Task<bool> IsEmailExist(string email)
        {
            try
            {
                User? userExist = await _context.user.Where(user => user.Email == email).FirstOrDefaultAsync();
                if (userExist == null)
                {
                    return false;
                }
                return true;
            }
            catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<User> GetUserByEmail(string email)
        {
            try
            {
                return await _context.user.Where(user => user.Email == email).FirstAsync();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<Boolean> ChangePassword(ResetPassword resetPassword)
        {
            try
            {
                User user = await _context.user.Where(user => user.Email == resetPassword.Email).FirstAsync();
                if (resetPassword.RePassword != resetPassword.Password)
                {
                    return false;
                }
                user.Password = HashString.EncodePassMD5(resetPassword.Password);
                _context.user.Update(user);
                return true;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<Boolean> UpdateCodeAndTimeSend(VerifyVerificationCodeRequest request)
        {
            try
            {
                User? user = await _context.user.Where(user => user.Email == request.Email).FirstOrDefaultAsync();
                if(user == null)
                {
                    return false;
                }
                user.VerifyCode = request.Code;
                user.TimeSendCode = DateTime.UtcNow;
                _context.user.Update(user);
                return true;
            }
            catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<Boolean> IsCodeUnExpired(VerifyVerificationCodeRequest request)
        {
            try
            {
                User user = await _context.user.Where(user => user.Email == request.Email).FirstAsync();
                if(user.VerifyCode == request.Code && user.TimeSendCode > DateTime.UtcNow.AddMinutes(-15)) 
                {
                    return true;
                }
                return false;
            }
            catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}