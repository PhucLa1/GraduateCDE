using authen_service.Entities.Base;
using System.ComponentModel.DataAnnotations.Schema;

namespace authen_service.Entities
{
    public class Group:BaseEntities
    {
        [Column("project_id")]
        public int ProjectId { get; set; }
        [Column("group_name")]
        public required string GroupName { get; set; }
    }
}
