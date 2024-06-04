using ServiceStack.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace authen_service.Dtos.UserDtos
{
    public record UserInfoDto
    {
        public required string FirstName { get; set; }

        public required string LastName { get; set; }

        public string? Avatar { get; set; }
        [Unique]
        [EmailAddress]
        public required string Email { get; set; }

        public string? WorkPhoneNumber { get; set; }

        public string? MobilePhoneNumber { get; set; }
        public string? LanguagePreference { get; set; }

        public string? Employer { get; set; }
        public string? JobTitle { get; set; }
        public int? LinkAccount { get; set; }
    }
}