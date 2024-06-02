using Microsoft.AspNetCore.Mvc.ModelBinding;
using NPOI.SS.Formula.Functions;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace authen_service.Models
{
    public  class ApiResponse<T>
    {
        public T? Metadata { get; set; }
        public required object Message { get; set; }
        public int StatusCode { get; set; }

        public static ApiResponse<T> Success(T? response, object Message)
        {
            return new ApiResponse<T>
            {
                Metadata = response,
                Message = Message,
                StatusCode = 200
            };
        }

        public static ApiResponse<T> Failed(object Message)
        {
            if (Message is ModelStateDictionary modelState)
            {
                Message = modelState
                    .SelectMany(kvp => kvp.Value.Errors.Select(e => e.ErrorMessage))
                    .ToArray();
            }
            return new ApiResponse<T>
            {
                Message = Message,
                StatusCode = 400
            };
        }
    }
}
