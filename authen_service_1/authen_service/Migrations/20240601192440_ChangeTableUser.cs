using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace authen_service.Migrations
{
    /// <inheritdoc />
    public partial class ChangeTableUser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "time-send-code",
                table: "user",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "verify-code",
                table: "user",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "time-send-code",
                table: "user");

            migrationBuilder.DropColumn(
                name: "verify-code",
                table: "user");
        }
    }
}
