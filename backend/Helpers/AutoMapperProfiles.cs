using AutoMapper;
using FourthProj.DTos;
using FourthProj.DTOs;
using FourthProj.Entities;
using Microsoft.AspNetCore.Identity;

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

            CreateMap<IdentityUser,UserDTO>();

        }

    }
}