namespace FourthProj.DTOs
{
    public class PatientDTO
    {
         public int PatientId{get;set;}
         public string PatientName { get; set; } = string.Empty;
         public string PhoneNumber { get; set; } = string.Empty;
         public string Email { get; set; } = string.Empty;
         public string Gender { get; set; } = string.Empty;
         public string Location { get; set; } = string.Empty;
        
    }
}