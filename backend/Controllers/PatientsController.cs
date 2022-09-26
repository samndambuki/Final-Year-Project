using AutoMapper;
using FourthProj.DTOs;
using FourthProj.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FourthProj.Controllers
{
    [Route("api/patients")]
    [ApiController]
    
    public class PatientsController:ControllerBase
    {
         private readonly ILogger<PatientsController> logger;
          private readonly ApplicationDbContext context;
          private readonly IMapper mapper;

         public PatientsController(ILogger<PatientsController> logger,ApplicationDbContext context,
         IMapper mapper)
         {
            this.logger = logger;
            this.context = context;
            this.mapper = mapper;
         }

         [HttpGet]
         public async Task<ActionResult<List<PatientDTO>>> Get()
         {
            logger.LogInformation("Getting all the patients");
           
           var patients = await context.Patients.ToListAsync();

           return mapper.Map<List<PatientDTO>>(patients);
           
         }

         [HttpGet("{Id:int}",Name="getPatient")]
         public ActionResult<Patient> Get(int id)
         {
            throw new NotImplementedException();
         }

         [HttpPost]
         public async Task <ActionResult> Post([FromBody] PatientCreationDTO patientCreationDTO)
         {
            var patient = mapper.Map<Patient>(patientCreationDTO);
            context.Add(patient);
            await context.SaveChangesAsync();
            return NoContent();
         }

         [HttpPut]
         public ActionResult Put([FromBody] Patient patient)
         {
            throw new NotImplementedException();
         }

    }
}