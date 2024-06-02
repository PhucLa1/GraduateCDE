namespace TestHarmonyAT.Repositories.Base
{
    public interface IBaseRepository<T>
        where T : class
    {
        Task AddAsync(T entity);

        Task RemoveAsync(int id);

        Task UpdateAsync(int id, T entity);

        Task<T> GetByIdAsync(int id);

        Task<IEnumerable<T>> GetAllAsync();

        IEnumerable<T> GetAll();
    }
}