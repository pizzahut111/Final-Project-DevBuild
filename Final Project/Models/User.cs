using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Final_Project.Models
{
    public class User
    {
        [Key]
        public int id { get; set; }
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public string Email { get; set; }
        public string User_Name { get; set; }
        public string Password { get; set; }
        public string Home_state_code { get; set; }
        public bool IsLoggedIn { get; set; }
    }
}
