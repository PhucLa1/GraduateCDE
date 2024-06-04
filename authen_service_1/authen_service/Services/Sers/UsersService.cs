using authen_service.Dtos.UserDtos;
using authen_service.Entities;
using authen_service.Helpers;
using authen_service.Models;
using authen_service.Repositories.IRepo;
using authen_service.Repositories.Repo;
using authen_service.Services.ISers;
using authen_service.unitOfWork;
using AutoMapper;
using System.Reflection.Metadata;

namespace authen_service.Services.Sers
{
    public class UsersService : IUsersService
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IUserRepository userRepository;
        private readonly IMapper _mapper;

        public UsersService(IHttpContextAccessor httpContextAccessor,IUnitOfWork unitOfWork,IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            userRepository = _unitOfWork.UserRepository;
            _httpContextAccessor = httpContextAccessor;
            _mapper = mapper;
        }
        public async Task<ApiResponse<UserShowingDto>> FindUserShowingDtoById()
        {
            // Lấy ra thông tin ID của người dùng từ context
            int userId = int.Parse(_httpContextAccessor.HttpContext.Items["UserId"] as string);
            if (userId == null)
            {
                return ApiResponse<UserShowingDto>.UnAuthorized();
            }
            User user = await userRepository.GetByIdAsync(userId);
            UserShowingDto userShowingDto = _mapper.Map<UserShowingDto>(user);
            return ApiResponse<UserShowingDto>.Success(userShowingDto, "Data return successfully");

        }
        public async Task<ApiResponse<UserInfoDto>> FindUserInfoDtoById()
        {
            int userId = int.Parse(_httpContextAccessor.HttpContext.Items["UserId"] as string);
            if (userId == null)
            {
                return ApiResponse<UserInfoDto>.UnAuthorized();
            }
            User user = await userRepository.GetByIdAsync(userId);
            UserInfoDto userInfoDto = _mapper.Map<UserInfoDto>(user);
            return ApiResponse<UserInfoDto>.Success(userInfoDto, "Data return successfully");
        }
        public async Task<ApiResponse<Boolean>> UpdateUserInfo(UpdateUserDto updateUserDto)
        {
            int userId = int.Parse(_httpContextAccessor.HttpContext.Items["UserId"] as string);
            if (userId == null)
            {
                return ApiResponse<Boolean>.UnAuthorized();
            }
            User user = await userRepository.GetByIdAsync(userId);
            user.FirstName = updateUserDto.FirstName;
            user.LastName = updateUserDto.LastName;
            user.WorkPhoneNumber = updateUserDto.WorkPhoneNumber;
            user.MobilePhoneNumber = updateUserDto.MobilePhoneNumber;   
            user.LanguagePreference = updateUserDto.LanguagePreference;
            user.JobTitle = updateUserDto.JobTitle;
            user.Employer = updateUserDto.Employer;
            if(updateUserDto.Avatar != null)
            {
                string fileName = await HandleImage.Upload(updateUserDto.Avatar);
                if(fileName != "") 
                {
                    return ApiResponse<Boolean>.Failed("Can not upload the image");
                }
                user.Avatar = fileName;
            }
            await userRepository.UpdateAsync(userId, user);
            await _unitOfWork.SaveAsync();
            return ApiResponse<Boolean>.Success(true,"Update the info user successfully");
        }
    }
}
