using authen_service.Dtos.UserDtos;
using authen_service.Models;
using authen_service.Services.ISers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using XAct.Security;

namespace authen_service.Controllers
{
    [Route("api/[controller]")]
    [Authorization]
    public class UsersController : ControllerBase
    {
        private readonly IUsersService _userService;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public UsersController(IUsersService userService, IHttpContextAccessor httpContextAccessor)
        {
            _userService = userService;
            _httpContextAccessor = httpContextAccessor;
        }

        [HttpGet]
        [Route("find-user-showing-by-id")]
        public async Task<ActionResult<ApiResponse<UserShowingDto>>> FindUserShowingDtoById()
        {
            var userId1 = HttpContext.Items["UserId"] as string;
            ApiResponse<UserShowingDto> dataReturn = await _userService.FindUserShowingDtoById();
            if (dataReturn.StatusCode == 200)
            {
                return Ok(dataReturn);
            }
            return Unauthorized(dataReturn);
        }
    }
}
