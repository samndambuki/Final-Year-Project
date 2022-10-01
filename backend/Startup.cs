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
                     //configure DBContext with SQL 
            services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(ConnectionString));

            var tokenValidationParameters = new TokenValidationParameters()
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JWT:Secret"])),
                    ValidateIssuer = true,
                    ValidIssuer = Configuration["JWT:Issuer"],

                    ValidateAudience = true,
                    ValidAudience = Configuration["JWT:Audience"],
                    ValidateLifetime = true,
                    ClockSkew = TimeSpan.Zero
                    };

            services.AddSingleton(tokenValidationParameters);

            services.AddCors();

            services.AddCors(options =>
{
    options.AddPolicy(name: "AllowOrigin",
        builder =>
        {
            builder.WithOrigins("http://localhost:3000", "http://192.168.43.44:3000")
                                .AllowAnyHeader()
                                .AllowAnyMethod();
        });
});
            
            services.AddAutoMapper(typeof(Startup));

            services.AddControllers();
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        services.AddEndpointsApiExplorer();

        services.AddAuthorization(options => {
            options.AddPolicy("IsAdmin",policy => policy.RequireClaim("role","admin"));
        });

        services.AddSwaggerGen();

        services.AddIdentity<IdentityUser,IdentityRole>()
        .AddEntityFrameworkStores<ApplicationDbContext>()
        .AddDefaultTokenProviders();

          //Add Authentication
            services.AddAuthentication(options=>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            }).
                AddJwtBearer(options => {
                options.SaveToken = true;
                options.RequireHttpsMetadata = false;
                options.TokenValidationParameters = tokenValidationParameters;
            });
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

            // Shows UseCors with CorsPolicyBuilder.
app.UseCors(builder =>
{
    builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader();
});

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
