using System;
using System.Collections.Generic;
using System.Text;

namespace COVID.Infra.Data.Mappings
{
  using COVID.Domain.Entities;
  using COVID.Domain.Entities.Views;
  using COVID.Infra.Data.Extensions;
  using Microsoft.EntityFrameworkCore;
  using Microsoft.EntityFrameworkCore.Metadata.Builders;
  public class BairrosAfetadosMapping : EntityTypeConfiguration<BairrosAfetados>
  {
    public override void Map(EntityTypeBuilder<BairrosAfetados> builder)
    {
      builder.HasNoKey();
      builder.Property(i => i.Latitude).HasColumnName("latitude");
      builder.Property(i => i.Longitude).HasColumnName("longitude");
      builder.Property(i => i.Nome).HasColumnName("nome_bairro");
      builder.Property(i => i.Cidade).HasColumnName("nome_cidade");
      builder.Property(i => i.Codigo).HasColumnName("codigo_bairro");
      builder.ToView("bairrosafetados");
    }
  }
}
