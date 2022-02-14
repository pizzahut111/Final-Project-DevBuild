using Dapper;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Final_Project.Models
{
    public class UserDAL
    {
        public static int loggedInUserId = -1;

        public List<User> GetAllUsers()
        {
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                string sql = "select * from users";
                connect.Open();
                List<User> allUsers = connect.Query<User>(sql).ToList();
                connect.Close();
                return allUsers;
            }
        }

        public User GetUserByID(int id)
        {
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                List<User> output = GetAllUsers();
                User match;
                try
                {
                    match = output.Where(u => u.id == id).First();
                }
                catch (InvalidOperationException)
                {
                    match = new User();
                    match.First_Name = $"User at index {id} does not exist - try another ID.";
                }
                return match;
            }
        }

        public void UpdateUser(int id, User newValues)
        {
            string sql = $"update users set First_Name='{newValues.First_Name}', " +
                $"Last_Name='{newValues.Last_Name}', " +
                $"Email='{newValues.Email}', " +
                $"User_Name='{newValues.User_Name}', " +
                $"Password='{newValues.Password}', " +
                $"Home_state_code='{newValues.Home_state_code}'," +
                $"isLoggedIn={newValues.IsLoggedIn} "+ 
                $"where id={id}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<User>(sql); 
                connect.Close();
            }
        }

        public void CreateUser(User newValues)
        {
            string sql = $"insert into users values(0, '{newValues.First_Name}', '{newValues.Last_Name}', '{newValues.Email}', '{newValues.User_Name}', '{newValues.Password}', '{newValues.Home_state_code}',{newValues.IsLoggedIn})";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<User>(sql); 
                connect.Close();
            }
        }

        public void DeleteUser(int id)
        {
            string sql = $"delete from users where id={id}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<User>(sql); 
                connect.Close();
            }
        }
        public void LogOutUser(User u)
        {
            string sql = "update users set isLoggedIn=false where id="+u.id;
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<User>(sql); 
                connect.Close();
            }
            loggedInUserId = -1;
        }
        public User GetLoggedInUser()
        {

            if (loggedInUserId != -1)
            {
                using (var connect = new MySqlConnection(Secret.Connection))
                {
                    string sql = "select * from users where id=" + loggedInUserId;
                    connect.Open();
                    User loggedInUser = connect.Query<User>(sql).ToList().First();
                    connect.Close();

                    return loggedInUser;
                }
            }
            else
            {
                User nullUser = new User();
                return nullUser;
            }
        }

        public bool ValidateUser(string username, string password)
        {
            List<User> allUsers = GetAllUsers();

            foreach (User u in allUsers) 
            {
                if (u.User_Name.ToLower() == username.ToLower())
                {
                    if (u.Password == password)
                    {
                        u.IsLoggedIn = true;
                        UpdateUser(u.id, u);
                        loggedInUserId = u.id;
                        string sql = $"update users set isloggedin=false where id !={u.id}";
                        using (var connect = new MySqlConnection(Secret.Connection))
                        {
                            connect.Open();
                            connect.Query<User>(sql); 
                            connect.Close();
                        }
                        return true;
                    }
                    return false;
                }
            }
            return false;
        }
    }
}
