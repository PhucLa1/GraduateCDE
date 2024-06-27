using authen_service.Data;
using authen_service.Entities;
using authen_service.Repositories.IRepos;
using TestHarmonyAT.Repositories.Base;

namespace authen_service.Repositories.Repos
{
    public class ProjectRepository : BaseRepository<Project>, IProjectRepository
    {
        public ProjectRepository(AuthenServiceDbContext context) : base(context)
        {
        }
    }
}
