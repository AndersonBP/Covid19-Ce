using System;

namespace COVID.Domain.Entities.Views
{
  public class TotalGeralUf
  {
    public long? Suspeitos { get; set; }
    public long? Infectados { get; set; }
    public long? Descartados { get; set; }
    public long? Obitos { get; set; }
    public long? Recuperados { get; set; }
    public DateTime Data { get; set; }
    public string Uf { get; set; }
  }
}
