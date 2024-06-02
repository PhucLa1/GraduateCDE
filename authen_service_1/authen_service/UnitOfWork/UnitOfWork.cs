using authen_service.Data;
using authen_service.Repositories.IRepo;
using authen_service.Repositories.Repo;
using authen_service.unitOfWork;
using Microsoft.EntityFrameworkCore;

namespace authen_service.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private AuthenServiceDbContext _context;
        private IUserRepository? userRepository;

        public UnitOfWork(AuthenServiceDbContext context)
        {
            _context = context;
        }
        public IUserRepository UserRepository
        {
            get
            {
                if (userRepository == null)
                {
                    userRepository = new UserRepository(_context);
                }

                return userRepository;
            }
        }

        public void Dispose()
        {
            _context.DisposeAsync();
        }

        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
