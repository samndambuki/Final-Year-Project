using AutoMapper;
using FourthProj.DTOs;
using FourthProj.Entities;
using FourthProj.Helpers;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FourthProj.Controllers
{
    [Route("api/specialties")]
    [ApiController]
    
    public class SpecialtiesController:ControllerBase
    {
         private readonly ILogger<DoctorsController> logger;
          private readonly ApplicationDbContext context;
          private readonly IMapper mapper;

         public SpecialtiesController(ILogger<DoctorsController> logger,ApplicationDbContext context,
         IMapper mapper)
         {
            this.logger = logger;
            this.context = context;
            this.mapper = mapper;
         }

         [HttpGet]
         public async Task<ActionResult<List<SpecialtyDTO>>> Get([FromQuery] PaginationDTO paginationDTO)
         {
            
            var queryable = context.Specialties.AsQueryable();

            await HttpContext.InsertParametersPaginationInHeader(queryable);
           
           var specialties = await queryable.OrderBy(x=>x.SpecialtyName).Paginate(paginationDTO).ToListAsync();

           return mapper.Map<List<SpecialtyDTO>>(specialties);
           
         }

         [HttpGet("{Id:int}",Name="getSpecialty")]

         public async Task <ActionResult<SpecialtyDTO>> Get(int Id)
         {
            var specialty = await context.Specialties.FirstOrDefaultAsync(x=>x.SpecialtyId == Id);
            if(specialty == null)
            {
               return NotFound(); 
            }

            return mapper.Map<SpecialtyDTO>(specialty);
         }

         [HttpPost]
         public async Task <ActionResult> Post([FromBody] SpecialtyCreationDTO specialtyCreationDTO)
         {
            var specialty = mapper.Map<Specialty>(specialtyCreationDTO);
            context.Add(specialty);
            await context.SaveChangesAsync();
            return NoContent();
         }

         [HttpPut("{id:int}")]
         
         public async Task<ActionResult> Put(int id,[FromBody] SpecialtyCreationDTO specialtyCreationDTO)
         {
            var specialty = await context.Specialties.FirstOrDefaultAsync(x=>x.SpecialtyId == id );
            if(specialty == null)
            {
               return NotFound();
            }

            specialty = mapper.Map(specialtyCreationDTO,specialty);
            await context.SaveChangesAsync();
            return NoContent();
         }

         [HttpDelete("{id:int}")]
         public async Task<ActionResult> Delete(int id)
         {
            var exists = await context.Specialties.AnyAsync(x => x.SpecialtyId == id);

            if(!exists)
            {
               return NotFound();
            }

            context.Remove(new Specialty(){SpecialtyId=id});
            await context.SaveChangesAsync();
            return NoContent();
         }
    }
}