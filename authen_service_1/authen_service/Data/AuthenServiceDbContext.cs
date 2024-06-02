using Microsoft.EntityFrameworkCore;
using authen_service.Entities;
using System.Security.Claims;

namespace authen_service.Data
{
    public class AuthenServiceDbContext : DbContext
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        public AuthenServiceDbContext(DbContextOptions<AuthenServiceDbContext> options, IHttpContextAccessor httpContextAccessor)
    : base(options)
        {
            _httpContextAccessor = httpContextAccessor;
        }
        public override int SaveChanges()
        {
            UpdateAuditFields();
            return base.SaveChanges();
        }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            UpdateAuditFields();
            return base.SaveChangesAsync(cancellationToken);
        }

        private void UpdateAuditFields()
        {
            var userId = GetCurrentUserId();

            foreach (var entry in ChangeTracker.Entries().Where(e => e.State == EntityState.Modified || e.State == EntityState.Added))
            {
                if (entry.Entity is IAuditable)
                {
                    var entity = (IAuditable)entry.Entity;
                    entity.UpdatedAt = DateTime.UtcNow;
                    entity.UpdatedBy = userId;

                    if (entry.State == EntityState.Added)
                    {
                        entity.CreatedAt = DateTime.UtcNow;
                        entity.CreatedBy = userId;
                    }
                }
            }
        }

        private int GetCurrentUserId()
        {
            // Assuming the user ID is stored in the claims of the current user
            var userIdClaim = _httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier);
            return userIdClaim != null ? int.Parse(userIdClaim.Value) : 0;
        }
        public DbSet<Group> group { get; set; }
        public DbSet<GroupUser> group_user { get; set; }
        public DbSet<Project> project { get; set; }
        public DbSet<User> user { get; set; }
        public DbSet<UserProject> user_project { get; set; }
    }
}