using COVID.Domain.Entities;
using COVID.Infra.Data.Extensions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace COVID.Infra.Data.Mappings
{
  public class CasoMapping : EntityTypeConfiguration<Caso>
  {
    public override void Map(EntityTypeBuilder<Caso> builder)
    {
      builder.HasKey(i => i.Id);

      builder.Property(i => i.Id).HasColumnName("codigo");
      builder.Property(i => i.UF).HasColumnName("uf");
      builder.Property(i => i.Cidade).HasColumnName("cidade");
      builder.Property(i => i.Bairro).HasColumnName("bairro");
      builder.Property(i => i.Sexo).HasColumnName("sexo");
      builder.Property(i => i.FaixaEtaria).HasColumnName("faixa_etaria");
      builder.Property(i => i.Suspeito).HasColumnName("suspeito");
      builder.Property(i => i.Confirmado).HasColumnName("confirmado");
      builder.Property(i => i.Descartado).HasColumnName("descartado");
      builder.Property(i => i.Obito).HasColumnName("obito");
      builder.Property(i => i.Data).HasColumnName("data");

      builder.ToTable("casos");
    }
  }
}
