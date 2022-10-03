namespace FourthProj.DTOs
{
    public class AppointmentDTO
    {
        public int AppointmentId { get; set; }
        public string PatientName { get; set; } = string.Empty;
        public string DoctorName { get; set; } = string.Empty;
        public string AppointmentDay {get;set;} = string.Empty;
        public string AppointmentTime {get;set;} = string.Empty;
         
    }
}