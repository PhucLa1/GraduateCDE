using authen_service.Entities.Base;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace authen_service.Entities
{
    public class UserProject:BaseEntities
    {
        [Column("user_id")]
        public int UserId { get; set; }
        [Column("project_id")]
        public int ProjectId { get; set; }
        [Column("status")]
        [Range(0, 1)]
        public int Status { get; set; }
        [Column("role")]
        [Range(0, 1)]
        public int Role { get; set; }
    }
}
