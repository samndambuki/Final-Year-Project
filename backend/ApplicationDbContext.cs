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

    }
}