namespace authen_service.Dtos.UserDtos
{
    public record UserShowingDto
    {
        public required string FullName { get; set; }
        public required string Email { get; set; }
        public required string Avatar { get; set; }
    }
}
