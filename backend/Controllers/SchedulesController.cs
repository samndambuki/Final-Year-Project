using AutoMapper;
using FourthProj.DTOs;
using FourthProj.Entities;
using FourthProj.Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FourthProj.Controllers
{
    [Route("api/schedules")]
    [ApiController]
    
    public class SchedulesController:ControllerBase
    {
         private readonly ILogger<SchedulesController> logger;
          private readonly ApplicationDbContext context;
          private readonly IMapper mapper;

         public SchedulesController(ILogger<SchedulesController> logger,ApplicationDbContext context,
         IMapper mapper)
         {
            this.logger = logger;
            this.context = context;
            this.mapper = mapper;
         }

         [HttpGet]
         public async Task<ActionResult<List<ScheduleDTO>>> Get([FromQuery] PaginationDTO paginationDTO)
         {
            
            var queryable = context.Schedules.AsQueryable();

            await HttpContext.InsertParametersPaginationInHeader(queryable);
           
           var schedules = await queryable.OrderBy(x=>x.DoctorName).Paginate(paginationDTO).ToListAsync();

           return mapper.Map<List<ScheduleDTO>>(schedules);
           
         }

         [HttpGet("{Id:int}",Name="getSchedule")]
         public async Task <ActionResult<ScheduleDTO>> Get(int Id)
         {
            var schedule = await context.Schedules.FirstOrDefaultAsync(x=>x.ScheduleId == Id);
            if(schedule == null)
            {
               return NotFound(); 
            }

            return mapper.Map<ScheduleDTO>(schedule);
         }

         [HttpPost]
         public async Task <ActionResult> Post([FromBody] ScheduleCreationDTO scheduleCreationDTO)
         {
            var schedule = mapper.Map<Schedule>(scheduleCreationDTO);
            context.Add(schedule);
            await context.SaveChangesAsync();
            return NoContent();
         }

         [HttpPut("{id:int}")]
         public async Task<ActionResult> Put(int id,[FromBody] ScheduleCreationDTO scheduleCreationDTO)
         {
            var schedule = await context.Schedules.FirstOrDefaultAsync(x=>x.ScheduleId == id );
            if(schedule == null)
            {
               return NotFound();
            }

            schedule = mapper.Map(scheduleCreationDTO,schedule);
            await context.SaveChangesAsync();
            return NoContent();
         }

         [HttpDelete("{id:int}")]
         public async Task<ActionResult> Delete(int id)
         {
            var exists = await context.Schedules.AnyAsync(x => x.ScheduleId == id);

            if(!exists)
            {
               return NotFound();
            }

            context.Remove(new Schedule(){ScheduleId=id});
            await context.SaveChangesAsync();
            return NoContent();
         }
    }
}