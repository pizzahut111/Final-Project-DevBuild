using Dapper;
using MySqlConnector;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Final_Project.Models
{
    public class ParkDAL
    {
        string apiKey = "&api_key=dD5Z8MilCF87nuaBngedmFcF1vDCl2hqdblh89yh";
        public Park GetAllParks()
        {
            string url = "https://developer.nps.gov/api/v1/parks?&limit=465" + apiKey;
            HttpWebRequest request = WebRequest.CreateHttp(url);
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();
            StreamReader rd = new StreamReader(response.GetResponseStream());
            string JSON = rd.ReadToEnd();
            rd.Close();
            
            Park pList = JsonConvert.DeserializeObject<Park>(JSON);
            return pList;

        }
        
        public Park GetParkByParkCode(string parkCode)
        {
            string url = "https://developer.nps.gov/api/v1/parks?parkCode=" + parkCode + apiKey;
            HttpWebRequest request = WebRequest.CreateHttp(url);
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();
            StreamReader rd = new StreamReader(response.GetResponseStream());
            string JSON = rd.ReadToEnd();
            rd.Close();

            Park p = JsonConvert.DeserializeObject<Park>(JSON);
            return p;
        }

        public void AddParksToDB()
        {
            Park p = GetAllParks();
            foreach (var data in p.data)
            {
                string sql = $"insert into parkdetails values('{data.parkCode}','{data.states}')";
                using (var connect = new MySqlConnection(Secret.Connection))
                {
                    connect.Open();
                    connect.Query<Park>(sql);
                    connect.Close();
                }
            }
        }
    }
}
