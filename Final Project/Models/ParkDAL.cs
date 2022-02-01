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
    }
}
