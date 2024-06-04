using authen_service.Data;
using authen_service.Dtos.UserDtos;
using authen_service.Entities;
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
        private readonly AuthenServiceDbContext context;

        public UsersController(IUsersService userService, AuthenServiceDbContext context)
        {
            _userService = userService;
            this.context = context;
        }

        [HttpGet]
        [Route("find-user-showing-by-id")]
        public async Task<ActionResult<ApiResponse<UserShowingDto>>> FindUserShowingDtoById()
        {
            ApiResponse<UserShowingDto> dataReturn = await _userService.FindUserShowingDtoById();
            if (dataReturn.StatusCode == 200)
            {
                return Ok(dataReturn);
            }
            return Unauthorized(dataReturn);
        }

        [HttpGet]
        [Route("find-user-info-by-id")]
        public async Task<ActionResult<ApiResponse<UserInfoDto>>> FindUserInfoDtoById()
        {
            ApiResponse<UserInfoDto> dataReturn = await _userService.FindUserInfoDtoById();
            if (dataReturn.StatusCode == 200)
            {
                return Ok(dataReturn);
            }
            return Unauthorized(dataReturn);
        }
        [HttpPut]
        [Route("update-user-info")]
        public async Task<ActionResult<ApiResponse<Boolean>>> UpdateUserInfo(UpdateUserDto updateUserDto)
        {
            ApiResponse<Boolean> dataReturn = await _userService.UpdateUserInfo(updateUserDto);
            if (dataReturn.StatusCode == 200)
            {
                return Ok(dataReturn);
            }
            else if (dataReturn.StatusCode == 400)
            {
                return BadRequest(dataReturn);
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ApiResponse<Boolean>.Failed(ModelState));
            }
            return Unauthorized(dataReturn);
        }
    }
}
