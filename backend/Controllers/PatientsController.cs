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

         public PatientsController(ILogger<PatientsController> logger,ApplicationDbContext context)
         {
            this.logger = logger;
            this.context = context;
         }

         [HttpGet]
         public async Task<ActionResult<List<Patient>>> Get()
         {
            logger.LogInformation("Getting all the patients");
           
           return await context.Patients.ToListAsync();
         }

         [HttpGet("{Id:int}",Name="getPatient")]
         public ActionResult<Patient> Get(int id)
         {
            throw new NotImplementedException();
         }

         [HttpPost]
         public async Task <ActionResult> Post([FromBody] Patient patient)
         {
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