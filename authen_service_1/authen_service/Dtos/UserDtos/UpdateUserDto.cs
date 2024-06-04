using ServiceStack.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace authen_service.Dtos.UserDtos
{
    public record UpdateUserDto
    {
        public required string FirstName { get; set; }

        public required string LastName { get; set; }

        public IFormFile? Avatar { get; set; }
        [RegularExpression(@"^\+?\d{1,3}?[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}$", ErrorMessage = "Invalid work phone number format.")]
        public string? WorkPhoneNumber { get; set; }
        [RegularExpression(@"^\+?\d{1,3}?[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}$", ErrorMessage = "Invalid mobile phone number format.")]
        public string? MobilePhoneNumber { get; set; }
        public string? LanguagePreference { get; set; }

        public string? Employer { get; set; }
        public string? JobTitle { get; set; }
    }
}
