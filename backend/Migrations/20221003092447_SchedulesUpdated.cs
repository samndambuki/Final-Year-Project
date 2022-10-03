using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    public partial class SchedulesUpdated : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Availability",
                table: "Schedules",
                newName: "AvailabilityTime");

            migrationBuilder.AddColumn<string>(
                name: "AvailabilityDate",
                table: "Schedules",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AvailabilityDate",
                table: "Schedules");

            migrationBuilder.RenameColumn(
                name: "AvailabilityTime",
                table: "Schedules",
                newName: "Availability");
        }
    }
}
