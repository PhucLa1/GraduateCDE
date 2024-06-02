namespace authen_service.Models
{
    public record ResetPassword
    {
        public required string Email { get; set; }
        public required string Password { get; set; }
        public required string RePassword { get; set; }
    }
}
