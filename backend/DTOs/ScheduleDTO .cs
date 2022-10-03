namespace FourthProj.DTOs
{
    public class ScheduleDTO
    {
        public int ScheduleId { get; set; }
        public string DoctorName { get; set; } = string.Empty;
        public string AvailabilityDate {get;set;} = string.Empty;
        public string AvailabilityTime { get; set; } = string.Empty;
         
    }
}