using authen_service.Dtos.UserDtos;
using authen_service.Entities;
using AutoMapper;
using JWTAuthencation.Models.OtherModels;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace authen_service.AutoMapping
{
    public class UserMapper : Profile
    {
        public UserMapper() 
        {
            CreateMap<User, UserShowingDto>()
                .ForMember(destination => destination.FullName, opt => opt.MapFrom(src => $"{src.LastName} {src.FirstName}"));
            CreateMap<UserSignupDto, User>()
                .ForAllMembers(opt => opt.Condition((src, destination, srcMember) => srcMember != null));
            CreateMap<User, UserInfoDto>();
            CreateMap<FacebookUserInfoResult, User>()
                .ForMember(destination => destination.Avatar, opt => opt.MapFrom(src => src.FacebookPicture.Data.GetFileNameFromUrl()))
                .ForAllMembers(opt => opt.Condition((src, destination, srcMember) => srcMember != null));
        }
    }
}
