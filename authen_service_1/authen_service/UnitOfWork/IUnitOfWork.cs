using authen_service.Repositories.IRepo;

namespace authen_service.unitOfWork
{
    public interface IUnitOfWork : IDisposable
    {
        IUserRepository UserRepository { get; }
        Task SaveAsync();
    }
}
