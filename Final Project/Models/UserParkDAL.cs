using Dapper;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Final_Project.Models
{
    public class UserParkDAL
    {
        ParkDAL pd = new ParkDAL();
        public List<UserPark> GetAllUserParks(int id)
        {
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                string sql = "select * from users_parks where UserId="+id;
                connect.Open();
                List<UserPark> allUserParks = connect.Query<UserPark>(sql).ToList();
                connect.Close();
                return allUserParks;
            }
        }        
       
        public void AddUserParks(string parkCode, User user)
        {
                string sql = $"insert into users_parks values(0, {user.id}, '{parkCode}')";
                using (var connect = new MySqlConnection(Secret.Connection))
                {
                    connect.Open();
                    connect.Query<UserPark>(sql);
                    connect.Close();
                }
        }

        public void DeleteUserParks(string parkcode, int userid)
        {
            string sql = $"delete from users_parks where parkcode='{parkcode}' and UserId={userid}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<UserPark>(sql);
                connect.Close();
            }
        }

        public Park GetUserParks(int userId)
        {
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                string sql = "select distinct parkcode from users_parks where UserId=" + userId;
                connect.Open();
                List<string> allParkcodes = connect.Query<string>(sql).ToList();
                connect.Close();
                Park p = new Park();
                Datum[] p1 = new Datum[allParkcodes.Count];
                for (int i= 0;i< allParkcodes.Count;i++)
                { 
                    p1[i] = pd.GetParkByParkCode(allParkcodes[i]).data[0];
                }
                p.data = p1;
                return p;
            }
        }
    }
}
