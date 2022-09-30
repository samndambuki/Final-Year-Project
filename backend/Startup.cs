using System.Text;
using FourthProj;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace ProjAPI;
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        public IConfiguration Configuration{get;}

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
            options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            
            services.AddAutoMapper(typeof(Startup));

            services.AddControllers();
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        services.AddEndpointsApiExplorer();
        services.AddSwaggerGen();

        services.AddIdentity<IdentityUser,IdentityRole>()
        .AddEntityFrameworkStores<ApplicationDbContext>()
        .AddDefaultTokenProviders();

        services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(
            options => 
            {
                options.TokenValidationParameters = new TokenValidationParameters 
                {
                    ValidateIssuer=false,
                    ValidateAudience = false,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(
                        Encoding.UTF8.GetBytes(Configuration["keyjwt"])
                    ),
                    ClockSkew = TimeSpan.Zero
                };
            }
        );

        services.AddCors(options=>{
            var frontendURL = Configuration.GetValue<string>("frontend_url");
            options.AddDefaultPolicy(builder=>{
                builder.WithOrigins(frontendURL).AllowAnyMethod().AllowAnyHeader()
                .WithExposedHeaders(new string[] {"totalAmountOfRecords"});
                
            });
        });

        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseRouting();

app.UseCors();

app.UseAuthorization();

app.UseEndpoints(endpoints=>
{
    endpoints.MapControllers();
});
        }

    }
