using System.ComponentModel.DataAnnotations;

namespace FourthProj.Entities
{
    public class Doctor
    {
        [Key]
         public int DoctorId{get;set;}
         public string DoctorName { get; set; } = string.Empty;
         public string SpecialtyName { get; set; } = string.Empty;
         public string Email { get; set; } = string.Empty;
         public string PhoneNumber { get; set; } = string.Empty;
         public string Gender { get; set; } = string.Empty;
    }
}