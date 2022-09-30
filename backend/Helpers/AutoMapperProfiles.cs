using AutoMapper;
using FourthProj.DTOs;
using FourthProj.Entities;

namespace FourthProj.Helpers
{
    public class AutoMapperProfiles:Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<PatientDTO,Patient>().ReverseMap();
            CreateMap<PatientCreationDTO,Patient>();

            CreateMap<DoctorDTO,Doctor>().ReverseMap();
            CreateMap<DoctorCreationDTO,Doctor>();

            CreateMap<SpecialtyDTO,Specialty>().ReverseMap();
            CreateMap<SpecialtyCreationDTO,Specialty>();

            CreateMap<ScheduleDTO,Schedule>().ReverseMap();
            CreateMap<ScheduleCreationDTO,Schedule>();

            CreateMap<AppointmentDTO,Appointment>().ReverseMap();
            CreateMap<AppointmentCreationDTO,Appointment>();

        }

    }
}