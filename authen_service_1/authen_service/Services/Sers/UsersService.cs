using authen_service.Dtos.UserDtos;
using authen_service.Entities;
using authen_service.Models;
using authen_service.Repositories.IRepo;
using authen_service.Repositories.Repo;
using authen_service.Services.ISers;
using authen_service.unitOfWork;
using AutoMapper;

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
    }
}
