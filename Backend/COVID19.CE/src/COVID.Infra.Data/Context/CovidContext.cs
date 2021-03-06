using System;
using System.IO;
using COVID.Domain.Entities;
using COVID.Infra.Data.Mappings;
using COVID.Infra.Data.Extensions;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using COVID.Domain.Entities.Views;

namespace COVID.Infra.Data.Context
{
  public class CovidContext : DbContext
  {
    public DbSet<Caso> Casos { get; set; }
    public DbSet<Domain.Entities.Views.Totais.Total> Totais { get; set; }
    public DbSet<Domain.Entities.Views.Totais.Total> TotalCidade { get; set; }
    public DbSet<TotalGeralUf> TotalGeralUf { get; set; }
    public DbSet<BairrosAfetados> BairrosAfetados { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.AddConfiguration(new CasoMapping());
      modelBuilder.AddConfiguration(new TotalMapping());
      modelBuilder.AddConfiguration(new BairrosAfetadosMapping());
      modelBuilder.AddConfiguration(new TotalGeralUfMapping());
      modelBuilder.AddConfiguration(new TotalCidadeMapping());

      base.OnModelCreating(modelBuilder);
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      var config = new ConfigurationBuilder()
          .SetBasePath(Directory.GetCurrentDirectory())
          .AddJsonFile("appsettings.json")
          .Build();

      var uriString = config.GetConnectionString("DefaultConnection");
      //var uri = new Uri(uriString);
      //var db = uri.AbsolutePath.Trim('/');
      //var user = uri.UserInfo.Split(':')[0];
      //var passwd = uri.UserInfo.Split(':')[1];
      //var port = uri.Port > 0 ? uri.Port : 5432;
      //var connStr = string.Format("Server={0};Database={1};User Id={2};Password={3};Port={4}",
      //    uri.Host, db, user, passwd, port);

      optionsBuilder.UseNpgsql(uriString);
    }
  }
}
