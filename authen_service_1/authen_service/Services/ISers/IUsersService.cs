using authen_service.Dtos.UserDtos;
using authen_service.Models;

namespace authen_service.Services.ISers
{
    public interface IUsersService
    {
        Task<ApiResponse<UserShowingDto>> FindUserShowingDtoById();

        Task<ApiResponse<UserInfoDto>> FindUserInfoDtoById();
        Task<ApiResponse<Boolean>> UpdateUserInfo(UpdateUserDto updateUserDto);
    }
}
