using authen_service.Entities.Base;
using ServiceStack.DataAnnotations;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace authen_service.Entities
{
    public class User : BaseEntities
    {
        [Column("first_name")]
        public string FirstName { get; set; }

        [Column("last_name")]
        public string LastName { get; set; }

        [Column("avatar")]
        [DefaultValue("person.png")]
        public string? Avatar { get; set; }

        [Column("email")]
        [Unique]
        [EmailAddress]
        public string Email { get; set; }

        [Column("work_phone_number")]
        [RegularExpression(@"^\+?\d{1,3}?[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}$", ErrorMessage = "Invalid work phone number format.")]
        public string? WorkPhoneNumber { get; set; }

        [Column("mobile_phone_number")]
        [RegularExpression(@"^\+?\d{1,3}?[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}$", ErrorMessage = "Invalid mobile phone number format.")]
        public string? MobilePhoneNumber { get; set; }

        [Column("language_preference")]
        public string? LanguagePreference { get; set; } = "English";

        [Column("password")]
        public string Password { get; set; }

        [Column("employer")]
        public string? Employer { get; set; }

        [Column("job_title")]
        public string? JobTitle { get; set; }

        [Column("link_account")]
        public int? LinkAccount { get; set; } = 1;

        [Column("last_accessed")]
        public DateTime? LastAccessed { get; set; } = DateTime.UtcNow;

        [Column("verify-code")]
        public string? VerifyCode { get; set; }

        [Column("time-send-code")]
        public DateTime? TimeSendCode { get; set; }
    }
}