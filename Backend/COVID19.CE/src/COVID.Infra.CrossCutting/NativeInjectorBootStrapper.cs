using COVID.Infra.Data.UoW;
using COVID.Domain.Interfaces;
using COVID.Infra.Data.Context;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

namespace COVID.Infra.CrossCutting
{
    public class NativeInjectorBootStrapper
    {
        public static void RegisterServices(IServiceCollection services)
        {
            // ASPNET
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();


            // Application
            //services.AddScoped<IEntityService, EntityService>();


            // Infra - Data
            //services.AddScoped<IEntityRepository, EntityRepository>();
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddScoped<CovidContext>();
        }
    }
}
