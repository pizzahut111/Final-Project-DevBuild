using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Final_Project.Models
{
    public class UserPark
    {
        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }
        public string ParkCode { get; set; }      
    }
}
