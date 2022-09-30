using AutoMapper;
using FourthProj.DTOs;
using FourthProj.Entities;
using FourthProj.Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FourthProj.Controllers
{
    [Route("api/appointments")]
    [ApiController]
    
    public class AppointmentsController:ControllerBase
    {
         private readonly ILogger<AppointmentsController> logger;
          private readonly ApplicationDbContext context;
          private readonly IMapper mapper;

         public AppointmentsController(ILogger<AppointmentsController> logger,ApplicationDbContext context,
         IMapper mapper)
         {
            this.logger = logger;
            this.context = context;
            this.mapper = mapper;
         }

         [HttpGet]
         public async Task<ActionResult<List<AppointmentDTO>>> Get([FromQuery] PaginationDTO paginationDTO)
         {
            
            var queryable = context.Appointments.AsQueryable();

            await HttpContext.InsertParametersPaginationInHeader(queryable);
           
           var appointments = await queryable.OrderBy(x=>x.PatientName).Paginate(paginationDTO).ToListAsync();

           return mapper.Map<List<AppointmentDTO>>(appointments);
           
         }

         [HttpGet("{Id:int}",Name="getAppointment")]
         public async Task <ActionResult<AppointmentDTO>> Get(int Id)
         {
            var appointment = await context.Appointments.FirstOrDefaultAsync(x=>x.AppointmentId == Id);
            if(appointment == null)
            {
               return NotFound(); 
            }

            return mapper.Map<AppointmentDTO>(appointment);
         }

         [HttpPost]
         public async Task <ActionResult> Post([FromBody] AppointmentCreationDTO appointmentCreationDTO)
         {
            var appointment = mapper.Map<Appointment>(appointmentCreationDTO);
            context.Add(appointment);
            await context.SaveChangesAsync();
            return NoContent();
         }

         [HttpPut("{id:int}")]
         public async Task<ActionResult> Put(int id,[FromBody] AppointmentCreationDTO appointmentCreationDTO)
         {
            var appointment = await context.Appointments.FirstOrDefaultAsync(x=>x.AppointmentId == id );
            if(appointment == null)
            {
               return NotFound();
            }

            appointment = mapper.Map(appointmentCreationDTO,appointment);
            await context.SaveChangesAsync();
            return NoContent();
         }

         [HttpDelete("{id:int}")]
         public async Task<ActionResult> Delete(int id)
         {
            var exists = await context.Appointments.AnyAsync(x => x.AppointmentId == id);

            if(!exists)
            {
               return NotFound();
            }

            context.Remove(new Appointment(){AppointmentId=id});
            await context.SaveChangesAsync();
            return NoContent();
         }
    }
}