using System.ComponentModel.DataAnnotations;

namespace authen_service.Dtos.UserDtos
{
    public record UserSignupDto
    {
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        public required string Email { get; set; }
        public required string Password { get; set; }
        public required string RePassword { get; set; }

    }
}
