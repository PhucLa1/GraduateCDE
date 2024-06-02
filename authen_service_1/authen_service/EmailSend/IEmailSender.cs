using authen_service.Models;

namespace authen_service.EmailSend
{
    public interface IEmailSender
    {
        Task SendEmail(Email request);
    }
}
