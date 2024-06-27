using authen_service.Dtos.ProjectDtos;
using authen_service.Dtos.UserDtos;
using authen_service.Entities;
using AutoMapper;

namespace authen_service.AutoMapping
{
    public class ProjectMapper : Profile
    {
        public ProjectMapper() 
        {
            CreateMap<CreateProjectDto, Project>()
                .ForAllMembers(opt => opt.Condition((src, destination, srcMember) => srcMember != null));
        }
        
    }
}
