﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using authen_service.Data;

#nullable disable

namespace authen_service.Migrations
{
    [DbContext(typeof(AuthenServiceDbContext))]
    [Migration("20240601192440_ChangeTableUser")]
    partial class ChangeTableUser
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.20")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("authen_service.Entities.Group", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("id");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime2")
                        .HasColumnName("created_at");

                    b.Property<int>("CreatedBy")
                        .HasColumnType("int")
                        .HasColumnName("created_by");

                    b.Property<string>("GroupName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("group_name");

                    b.Property<int>("ProjectId")
                        .HasColumnType("int")
                        .HasColumnName("project_id");

                    b.Property<DateTime>("UpdatedAt")
                        .HasColumnType("datetime2")
                        .HasColumnName("updated_at");

                    b.Property<int>("UpdatedBy")
                        .HasColumnType("int")
                        .HasColumnName("updated_by");

                    b.HasKey("Id");

                    b.ToTable("group");
                });

            modelBuilder.Entity("authen_service.Entities.GroupUser", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("id");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime2")
                        .HasColumnName("created_at");

                    b.Property<int>("CreatedBy")
                        .HasColumnType("int")
                        .HasColumnName("created_by");

                    b.Property<int>("GroupId")
                        .HasColumnType("int")
                        .HasColumnName("group_id");

                    b.Property<DateTime>("UpdatedAt")
                        .HasColumnType("datetime2")
                        .HasColumnName("updated_at");

                    b.Property<int>("UpdatedBy")
                        .HasColumnType("int")
                        .HasColumnName("updated_by");

                    b.Property<int>("UserId")
                        .HasColumnType("int")
                        .HasColumnName("user_id");

                    b.HasKey("Id");

                    b.ToTable("group_user");
                });

            modelBuilder.Entity("authen_service.Entities.Project", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("id");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime2")
                        .HasColumnName("created_at");

                    b.Property<int>("CreatedBy")
                        .HasColumnType("int")
                        .HasColumnName("created_by");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("description");

                    b.Property<DateTime>("EndDate")
                        .HasColumnType("datetime2")
                        .HasColumnName("end_date");

                    b.Property<int>("InvitePermission")
                        .HasColumnType("int")
                        .HasColumnName("invite_permission");

                    b.Property<string>("ProjectName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("project_name");

                    b.Property<string>("ServerLocation")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("server_location");

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("datetime2")
                        .HasColumnName("start_date");

                    b.Property<string>("Thumbnail")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("thumbnail");

                    b.Property<int>("TodoPermission")
                        .HasColumnType("int")
                        .HasColumnName("todo_permission");

                    b.Property<DateTime>("UpdatedAt")
                        .HasColumnType("datetime2")
                        .HasColumnName("updated_at");

                    b.Property<int>("UpdatedBy")
                        .HasColumnType("int")
                        .HasColumnName("updated_by");

                    b.HasKey("Id");

                    b.ToTable("project");
                });

            modelBuilder.Entity("authen_service.Entities.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("id");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Avatar")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("avatar");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime2")
                        .HasColumnName("created_at");

                    b.Property<int>("CreatedBy")
                        .HasColumnType("int")
                        .HasColumnName("created_by");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("email");

                    b.Property<string>("Employer")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("employer");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("first_name");

                    b.Property<string>("JobTitle")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("job_title");

                    b.Property<string>("LanguagePreference")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("language_preference");

                    b.Property<DateTime?>("LastAccessed")
                        .HasColumnType("datetime2")
                        .HasColumnName("last_accessed");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("last_name");

                    b.Property<int?>("LinkAccount")
                        .HasColumnType("int")
                        .HasColumnName("link_account");

                    b.Property<string>("MobilePhoneNumber")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("mobile_phone_number");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("password");

                    b.Property<DateTime?>("TimeSendCode")
                        .HasColumnType("datetime2")
                        .HasColumnName("time-send-code");

                    b.Property<DateTime>("UpdatedAt")
                        .HasColumnType("datetime2")
                        .HasColumnName("updated_at");

                    b.Property<int>("UpdatedBy")
                        .HasColumnType("int")
                        .HasColumnName("updated_by");

                    b.Property<string>("VerifyCode")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("verify-code");

                    b.Property<string>("WorkPhoneNumber")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("work_phone_number");

                    b.HasKey("Id");

                    b.ToTable("user");
                });

            modelBuilder.Entity("authen_service.Entities.UserProject", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("id");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime2")
                        .HasColumnName("created_at");

                    b.Property<int>("CreatedBy")
                        .HasColumnType("int")
                        .HasColumnName("created_by");

                    b.Property<int>("ProjectId")
                        .HasColumnType("int")
                        .HasColumnName("project_id");

                    b.Property<int>("Role")
                        .HasColumnType("int")
                        .HasColumnName("role");

                    b.Property<int>("Status")
                        .HasColumnType("int")
                        .HasColumnName("status");

                    b.Property<DateTime>("UpdatedAt")
                        .HasColumnType("datetime2")
                        .HasColumnName("updated_at");

                    b.Property<int>("UpdatedBy")
                        .HasColumnType("int")
                        .HasColumnName("updated_by");

                    b.Property<int>("UserId")
                        .HasColumnType("int")
                        .HasColumnName("user_id");

                    b.HasKey("Id");

                    b.ToTable("user_project");
                });
#pragma warning restore 612, 618
        }
    }
}