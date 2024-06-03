using authen_service.Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using AutoMapper;
using authen_service.AutoMapping;
using authen_service.unitOfWork;
using NPOI.SS.Formula.Functions;
using TestHarmonyAT.Repositories.Base;
using authen_service.Repositories.Repo;
using authen_service.Repositories.IRepo;
using authen_service.Services.Sers;
using authen_service.Services.ISers;
using authen_service.UnitOfWork;
using authen_service.EmailSend;
using authen_service.Jwt;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<AuthenServiceDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("AuthenServiceDBContext")));

builder.Services.AddHttpClient();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowOrigin",
        builder => builder
            .WithOrigins("http://127.0.0.1:5500", "https://localhost:3000") // Điền vào tên miền của dự án giao diện của bạn
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials() // Cho phép sử dụng credentials (cookies, xác thực)
    );
});


//Unit Of Work
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();

//Repositories
builder.Services.AddScoped<IBaseRepository<T>, BaseRepository<T>>();
builder.Services.AddScoped<IUserRepository, UserRepository>();

//Services
builder.Services.AddScoped<IAuthService, AuthService>();
builder.Services.AddScoped<IEmailSender, EmailSender>();
builder.Services.AddScoped<IUsersService, UsersService>();




builder.Services.AddHttpContextAccessor();
builder.Services.AddAutoMapper(typeof(UserMapper));
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddCookie(x =>
    {
        x.Cookie.Name = "token";
    })
    .AddJwtBearer(options =>
    {
        options.RequireHttpsMetadata = false;
        options.SaveToken = true;
        options.TokenValidationParameters = new TokenValidationParameters
        {
            //2 dong
            ValidateIssuer = false,
            ValidateAudience = false,
            ValidAudience = builder.Configuration["Jwt:Audience"],
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
        };
        options.Events = new JwtBearerEvents
        {
            OnMessageReceived = context =>
            {
                context.Token = context.Request.Cookies["X-Access-Token"];
                return Task.CompletedTask;
            }
        };
    });

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseJwtMiddleware();
app.UseHttpsRedirection();
app.UseCors("AllowOrigin");
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
