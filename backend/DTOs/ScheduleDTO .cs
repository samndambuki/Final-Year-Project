namespace FourthProj.DTOs
{
    public class ScheduleDTO
    {
        public int ScheduleId { get; set; }
        public string DoctorName { get; set; } = string.Empty;
        public DateTime Availability {get;set;}
         
    }
}