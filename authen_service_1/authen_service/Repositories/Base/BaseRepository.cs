using Microsoft.EntityFrameworkCore;
using authen_service.Data;

namespace TestHarmonyAT.Repositories.Base
{
    public class BaseRepository<T> : IBaseRepository<T>
        where T : class
    {
        protected readonly AuthenServiceDbContext _context;
        protected readonly DbSet<T> _dbSet;

        public BaseRepository(AuthenServiceDbContext context)
        {
            _context = context;
            _dbSet = _context.Set<T>();
        }

        public async Task AddAsync(T entity)
        {
            await _dbSet.AddAsync(entity);
        }

        public IEnumerable<T> GetAll()
        {
            var res = _dbSet.ToList();
            return res;
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            var res = await _dbSet.ToListAsync();
            return res;
        }

        public async Task<T> GetByIdAsync(int id)
        {
            var res = await _dbSet.FindAsync(id);
            return res;
        }

        public async Task RemoveAsync(int id)
        {
            var res = await _dbSet.FindAsync(id);
            _dbSet.Remove(res);
        }

        public async Task UpdateAsync(int id, T entity)
        {
            var res = await _dbSet.FindAsync(id);
            _context.Entry(entity).State = EntityState.Modified;
            _dbSet.Update(res);
        }
    }
}