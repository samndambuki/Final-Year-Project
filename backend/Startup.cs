using System.Text;
using FourthProj;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;

namespace ProjAPI;
    public class Startup
    {
        public string ConnectionString { get; set; }
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
            ConnectionString = Configuration.GetConnectionString("DefaultConnection");
        }
        public IConfiguration Configuration{get;}

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews(); 
                     //configure DBContext with SQL 
            services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(ConnectionString));

            // services.AddCors();

//             services.AddCors(options =>
// {
//     options.AddPolicy(name: "AllowOrigin",
//         builder =>
//         {
//             builder.WithOrigins("http://localhost:3000", "http://192.168.43.44:3000")
//                                 .AllowAnyHeader()
//                                 .WithExposedHeaders(new string[] { "totalAmountOfRecords" })
//                                 .AllowAnyMethod();
//         });
// });

   services.AddCors(options =>
        {
            var frontendURL = Configuration.GetValue<string>("frontend_url");
            options.AddDefaultPolicy(builder =>
            {
                builder.WithOrigins(frontendURL).AllowAnyMethod().AllowAnyHeader()
                .WithExposedHeaders(new string[] { "totalAmountOfRecords" });
            });

        });


            
            services.AddAutoMapper(typeof(Startup));

            services.AddControllers();
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        services.AddEndpointsApiExplorer();

        services.AddSwaggerGen();

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Outspan Hospital Online Consulatation Site.API", Version = "v1" });
            });
        }
        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Outsapn Hospital Online Consulation Site v1"));
            }

//             // Shows UseCors with CorsPolicyBuilder.
// app.UseCors(builder =>
// {
//     builder
//     .AllowAnyOrigin()
//     .AllowAnyMethod()
//     .AllowAnyHeader();
// });
 app.UseCors(x=>x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()); 

            app.UseHttpsRedirection();

            app.UseRouting();

            //Authentication & Authorization
            app.UseAuthentication();
            
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
           
        }

    }
