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
        }

    }
}