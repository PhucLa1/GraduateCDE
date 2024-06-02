using authen_service.Entities.Base;
using System.ComponentModel.DataAnnotations.Schema;

namespace authen_service.Entities
{
    public class GroupUser:BaseEntities
    {
        [Column("user_id")]
        public int UserId { get; set; }
        [Column("group_id")]
        public int GroupId { get; set; }

    }
}
