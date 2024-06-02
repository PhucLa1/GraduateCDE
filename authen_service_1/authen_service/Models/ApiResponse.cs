using NPOI.SS.Formula.Functions;

namespace authen_service.Models
{
    public  class ApiResponse<T>
    {
        public T? Metadata { get; set; }
        public required string Message { get; set; }
        public int StatusCode { get; set; }

        public static ApiResponse<T> Success(T? response, string Message)
        {
            return new ApiResponse<T>
            {
                Metadata = response,
                Message = Message,
                StatusCode = 200
            };
        }

        public static ApiResponse<T> Failed(string Message)
        {
            return new ApiResponse<T>
            {
                Message = Message,
                StatusCode = 400
            };
        }
    }
}
