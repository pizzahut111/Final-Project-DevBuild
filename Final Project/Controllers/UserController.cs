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
        [HttpPut("updateUser={userId}")]
        public void UpdateUser(int userId)
        {
            User original = ud.GetUserByID(userId);

            //if (userUpdated.First_Name == null || userUpdated.First_Name == "")
            //{
            //    userUpdated.First_Name = original.First_Name;
            //}
            //if (userUpdated.Last_Name == null || userUpdated.Last_Name == "")
            //{
            //    userUpdated.Last_Name = original.Last_Name;
            //}
            //if (userUpdated.Email == null || userUpdated.Email == "")
            //{
            //    userUpdated.Email = original.Email;
            //}
            //if (userUpdated.User_Name == null || userUpdated.User_Name == "")
            //{
            //    userUpdated.User_Name = original.User_Name;
            //}
            //if (userUpdated.Password == null || userUpdated.Password == "")
            //{
            //    userUpdated.Password = original.Password;
            //}
            //if (userUpdated.Home_state_code == null || userUpdated.Home_state_code == "")
            //{
            //    userUpdated.Home_state_code = original.Home_state_code;
            //}
            //if (userUpdated.IsLoggedIn != original.IsLoggedIn)
            //{
            //     original.IsLoggedIn = userUpdated.IsLoggedIn;
            //}
            original.IsLoggedIn = false;
            ud.LogOutUser(userId);
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
    }
}
