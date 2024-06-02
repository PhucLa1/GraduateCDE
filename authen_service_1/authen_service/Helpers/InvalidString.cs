using System.Text.RegularExpressions;

namespace authen_service.Helpers
{
    public static class InvalidString
    {
        public static bool IsInvalidPassword(string password)
        {
            string pattern = @"^(?=.*[a-z])(?=.*[A-Z]).{8,}$";

            // Sử dụng Regex.IsMatch để kiểm tra mật khẩu
            return !Regex.IsMatch(password, pattern);
        }
    }
}
