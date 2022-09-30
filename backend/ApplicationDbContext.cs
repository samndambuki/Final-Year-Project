using System.Diagnostics.CodeAnalysis;
using FourthProj.Entities;
using Microsoft.EntityFrameworkCore;

namespace FourthProj
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext([NotNullAttribute]DbContextOptions options) : base(options)
        {

        }
        public DbSet<Patient> Patients { get; set; }
        public DbSet<Doctor> Doctors { get; set; }
        public DbSet<Specialty> Specialties { get; set; }
        public DbSet<Schedule> Schedules { get; set; }
         public DbSet<Appointment> Appointments { get; set; }

    }
}