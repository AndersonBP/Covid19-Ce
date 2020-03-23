using COVID.Infra.Data.UoW;
using COVID.Domain.Interfaces;
using COVID.Infra.Data.Context;
using Microsoft.AspNetCore.Http;
using COVID.Application.Services;
using COVID.Infra.Data.Repository;
using COVID.Application.Interfaces;
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
      services.AddScoped<ICasoService, CasoService>();
      services.AddScoped<ITotalRegiaoService, TotalRegiaoService>();
      services.AddScoped<ITotalGeralUfService, TotalGeralUfService>();
      services.AddScoped<IBairrosAfetadosService, BairrosAfetadosService>();


      // Infra - Data
      services.AddScoped<ITotalGeralUfRepository, TotalGeralUfRepository>();
      services.AddScoped<ITotalRegiaoRepository, TotalRegiaoRepository>();
      services.AddScoped<ICasoRepository, CasoRepository>();
      services.AddScoped<IBairrosAfetadosRepository, BairrosAfetadosRepository>();
      services.AddScoped<IUnitOfWork, UnitOfWork>();
      services.AddScoped<CovidContext>();
    }
  }
}
