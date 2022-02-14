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
    public class UserController : ControllerBase
    {
        UserDAL ud = new UserDAL();
        UserParkDAL upd = new UserParkDAL();

        [HttpGet("users")]
        public List<User> GetUsers()
        {
            List<User> users = ud.GetAllUsers();
            return users;
        }

        [HttpGet("userId={userId}")]
        public User GetUserByID(int userId)
        {
            User u = ud.GetUserByID(userId);
            return u;
        }
 
        [HttpPost("addUserPark={parkCode}")]
        public void AddUserPark(string parkCode, User user)
        {
            upd.AddUserParks(parkCode, user);
        }

        [HttpGet("getLoggedInUser")]
        public User GetLoggedInUser()
        {
            return ud.GetLoggedInUser();
        }

        [HttpGet("loginu={username}p={password}")]
        public bool ValidateUser(string username, string password)
        {
            return ud.ValidateUser(username, password);
        }

        [HttpPut("logout")]
        public void LogOutUser (User u)
        {
            ud.LogOutUser(u);
        }

        [HttpGet("userParkList{id}")]
        public Park GetUserParks(int id)
        {
            return upd.GetUserParks(id);
        }
    }
}
