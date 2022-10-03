using System.ComponentModel.DataAnnotations;

namespace FourthProj.Entities{
    public class Schedule
    {
        [Key]
        public int ScheduleId { get; set; }
        public string DoctorName { get; set; } = string.Empty;
        public string AvailabilityDate {get;set;} = string.Empty;
        public string AvailabilityTime { get; set; } = string.Empty;
    }
}