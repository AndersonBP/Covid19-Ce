using COVID.Infra.Data.Extensions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace COVID.Infra.Data.Mappings
{
  public class TotalMapping : EntityTypeConfiguration<Domain.Entities.Views.Totais.Total>
  {
    public override void Map(EntityTypeBuilder<Domain.Entities.Views.Totais.Total> builder)
    {
      builder.HasNoKey();
      
      builder.Property(i => i.TotalRecuperados).HasColumnName("totalrecuperados");
      builder.Property(i => i.TotalObitos).HasColumnName("totalobitos");
      builder.Property(i => i.TotalInfectados).HasColumnName("totalinfectados");

      builder.Property(i => i.UF).HasColumnName("uf");
      builder.Property(i => i.Cidade).HasColumnName("cidade");
      builder.Property(i => i.Bairro).HasColumnName("bairro");

      builder.Property(i => i.Data).HasColumnName("data");

      builder.Property(i => i.Infectados).HasColumnName("infectados");
      builder.Property(i => i.Obitos).HasColumnName("obitos");
      builder.Property(i => i.Recuperados).HasColumnName("recuperados");
      builder.Property(i => i.Suspeitos).HasColumnName("suspeitos");
      builder.Property(i => i.Descartados).HasColumnName("descartados");
      builder.Property(i => i.NomeCidade).HasColumnName("nome_cidade");

      builder.Property(i => i.Latitude).HasColumnName("latitude");
      builder.Property(i => i.Longitude).HasColumnName("longitude");

      builder.ToView("totalregiao");
    }
  }
}
