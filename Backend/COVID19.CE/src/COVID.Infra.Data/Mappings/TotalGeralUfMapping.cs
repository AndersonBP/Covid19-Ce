using COVID.Domain.Entities.Views;
using COVID.Infra.Data.Extensions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace COVID.Infra.Data.Mappings
{
  public class TotalGeralUfMapping : EntityTypeConfiguration<TotalGeralUf>
  {
    public override void Map(EntityTypeBuilder<TotalGeralUf> builder)
    {
      builder.HasNoKey();
      builder.Property(i => i.Suspeitos).HasColumnName("suspeitos");
      builder.Property(i => i.Infectados).HasColumnName("infectados");
      builder.Property(i => i.Descartados).HasColumnName("descartados");
      builder.Property(i => i.Obitos).HasColumnName("obitos");
      builder.Property(i => i.Recuperados).HasColumnName("recuperados");
      builder.Property(i => i.Data).HasColumnName("data");
      builder.Property(i => i.Uf).HasColumnName("uf");
      builder.ToView("totalufdata");
    }
  }
}
