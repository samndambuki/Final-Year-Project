using AutoMapper;
using FourthProj.DTOs;
using FourthProj.Entities;
using FourthProj.Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FourthProj.Controllers
{
    [Route("api/doctors")]
    [ApiController]
    
    public class DoctorsController:ControllerBase
    {
         private readonly ILogger<DoctorsController> logger;
          private readonly ApplicationDbContext context;
          private readonly IMapper mapper;

         public DoctorsController(ILogger<DoctorsController> logger,ApplicationDbContext context,
         IMapper mapper)
         {
            this.logger = logger;
            this.context = context;
            this.mapper = mapper;
         }

         [HttpGet]
         public async Task<ActionResult<List<DoctorDTO>>> Get([FromQuery] PaginationDTO paginationDTO)
         {
            
            var queryable = context.Doctors.AsQueryable();

            await HttpContext.InsertParametersPaginationInHeader(queryable);
           
           var doctors = await queryable.OrderBy(x=>x.DoctorName).Paginate(paginationDTO).ToListAsync();

           return mapper.Map<List<DoctorDTO>>(doctors);
           
         }

         [HttpGet("{Id:int}",Name="getDoctor")]
         public async Task <ActionResult<DoctorDTO>> Get(int Id)
         {
            var doctor = await context.Doctors.FirstOrDefaultAsync(x=>x.DoctorId == Id);
            if(doctor == null)
            {
               return NotFound(); 
            }

            return mapper.Map<DoctorDTO>(doctor);
         }

         [HttpPost]
         public async Task <ActionResult> Post([FromBody] DoctorCreationDTO doctorCreationDTO)
         {
            var doctor = mapper.Map<Doctor>(doctorCreationDTO);
            context.Add(doctor);
            await context.SaveChangesAsync();
            return NoContent();
         }

         [HttpPut("{id:int}")]
         public async Task<ActionResult> Put(int id,[FromBody] DoctorCreationDTO doctorCreationDTO)
         {
            var doctor = await context.Doctors.FirstOrDefaultAsync(x=>x.DoctorId == id );
            if(doctor == null)
            {
               return NotFound();
            }

            doctor = mapper.Map(doctorCreationDTO,doctor);
            await context.SaveChangesAsync();
            return NoContent();
         }

         [HttpDelete("{id:int}")]
         public async Task<ActionResult> Delete(int id)
         {
            var exists = await context.Doctors.AnyAsync(x => x.DoctorId == id);

            if(!exists)
            {
               return NotFound();
            }

            context.Remove(new Doctor(){DoctorId=id});
            await context.SaveChangesAsync();
            return NoContent();
         }
    }
}