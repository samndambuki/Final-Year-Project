using AutoMapper;
using FourthProj.DTOs;
using FourthProj.Entities;
using FourthProj.Helpers;
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
         public async Task<ActionResult<List<PatientDTO>>> Get([FromQuery] PaginationDTO paginationDTO)
         {
            
            var queryable = context.Patients.AsQueryable();

            await HttpContext.InsertParametersPaginationInHeader(queryable);
           
           var patients = await queryable.OrderBy(x=>x.PatientName).Paginate(paginationDTO).ToListAsync();

           return mapper.Map<List<PatientDTO>>(patients);
           
         }

         [HttpGet("{Id:int}",Name="getPatient")]
         public async Task <ActionResult<PatientDTO>> Get(int Id)
         {
            var patient = await context.Patients.FirstOrDefaultAsync(x=>x.PatientId == Id);
            if(patient == null)
            {
               return NotFound(); 
            }

            return mapper.Map<PatientDTO>(patient);
         }

         [HttpPost]
         public async Task <ActionResult> Post([FromBody] PatientCreationDTO patientCreationDTO)
         {
            var patient = mapper.Map<Patient>(patientCreationDTO);
            context.Add(patient);
            await context.SaveChangesAsync();
            return NoContent();
         }

         [HttpPut("{id:int}")]
         public async Task<ActionResult> Put(int id,[FromBody] PatientCreationDTO patientCreationDTO)
         {
            var patient = await context.Patients.FirstOrDefaultAsync(x=>x.PatientId == id );
            if(patient == null)
            {
               return NotFound();
            }

            patient = mapper.Map(patientCreationDTO,patient);
            await context.SaveChangesAsync();
            return NoContent();
         }

         [HttpDelete("{id:int}")]
         public async Task<ActionResult> Delete(int id)
         {
            var exists = await context.Patients.AnyAsync(x => x.PatientId == id);

            if(!exists)
            {
               return NotFound();
            }

            context.Remove(new Patient(){PatientId=id});
            await context.SaveChangesAsync();
            return NoContent();
         }
    }
}