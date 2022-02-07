using Final_Project.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Final_Project.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController: ControllerBase
    {
        UserDAL ud = new UserDAL();
        [HttpGet("users")]
        public List<User> GetUsers()
        {
            List<User> users = ud.GetAllUsers();
            return users;
        }
    }
}
