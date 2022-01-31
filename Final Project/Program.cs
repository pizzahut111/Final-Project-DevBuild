using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Final_Project
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
<<<<<<< HEAD
<<<<<<< HEAD
            Console.WriteLine("This line was added by Cullin.");
=======
            Console.WriteLine("It's yosha");
>>>>>>> ad6612edfd765908c169c213e2cc001fab8f75db
=======

            Console.WriteLine("This line was added by Cullin.");

            Console.WriteLine("It's yosha");

>>>>>>> 7723c528653e8017a4434b0e86b0d93e13536fae
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
