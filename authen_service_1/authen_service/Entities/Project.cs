using authen_service.Entities.Base;
using ServiceStack.DataAnnotations;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;

namespace authen_service.Entities
{
    public class Project:BaseEntities
    {
        [Column("project_name")]
        public required string ProjectName { get; set; }
        [Column("thumbnail")]
        public string? Thumbnail { get; set; }
        [Column("server_location")]
        public required string ServerLocation { get; set; } = "UTCCloud";
        [Column("start_date")]
        public DateTime StartDate { get; set; }
        [Column("end_date")]
        public DateTime EndDate { get; set; }
        [Column("description")]
        public required string Description { get; set; }
        [Column("todo_permission")]
        [Range(0, 1)]
        public int TodoPermission { get; set; } = 0;
        [Column("invite_permission")]
        [Range(0, 1)]
        public int InvitePermission { get; set; } = 0;
    }
}
