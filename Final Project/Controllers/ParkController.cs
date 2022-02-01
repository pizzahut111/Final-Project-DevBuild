using Final_Project.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Final_Project.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ParkController : ControllerBase
    {
        ParkDAL dal = new ParkDAL();
        [HttpGet("parkCode={parkCode}")]
        public Park GetParkByParkCode(string parkCode)
        {

            return dal.GetParkByParkCode(parkCode);
        }

    }

}
