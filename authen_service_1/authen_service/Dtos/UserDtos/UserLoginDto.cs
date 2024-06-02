using System.ComponentModel.DataAnnotations;

namespace authen_service.Dtos.UserDtos
{
    public record UserLoginDto
    {
        [EmailAddress]
        public required string Email { get; set; }

        public required string  Password { get; set; }
    }
}
