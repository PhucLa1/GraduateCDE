namespace authen_service.Dtos.ProjectDtos
{
    public record CreateProjectDto
    {
        public required string ProjectName { get; set; }

        public IFormFile? ThumbnailFile { get; set; }
        public required string ServerLocation { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }

        public string? Description { get; set; }
    }
}
