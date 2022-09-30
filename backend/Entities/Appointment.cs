using System.ComponentModel.DataAnnotations;

namespace FourthProj.Entities{
    public class Appointment
    {
        [Key]
        public int AppointmentId { get; set; }
        public string PatientName { get; set; } = string.Empty;
        public string DoctorName { get; set; } = string.Empty;
        public DateTime PatientAppointment {get;set;}
    }
}