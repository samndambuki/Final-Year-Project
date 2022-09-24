using FourthProj.Entities;
using Microsoft.AspNetCore.Mvc;

namespace FourthProj.Controllers
{
    [Route("api/patients")]
    [ApiController]
    
    public class PatientsController:ControllerBase
    {
         private readonly ILogger<PatientsController> logger;

         public PatientsController(ILogger<PatientsController> logger)
         {
            this.logger = logger;
         }

         [HttpGet]
         public async Task<ActionResult<List<Patient>>> Get()
         {
            logger.LogInformation("Getting all the patients");
            return new List<Patient>() {new Patient(){Id=1,Name="Sam"}};
         }

         [HttpGet("{Id:int}",Name="getPatient")]
         public ActionResult<Patient> Get(int id)
         {
            throw new NotImplementedException();
         }

         [HttpPost]
         public ActionResult Post([FromBody] Patient patient)
         {
            throw new NotImplementedException();
         }

         [HttpPut]
         public ActionResult Put([FromBody] Patient patient)
         {
            throw new NotImplementedException();
         }

    }
}