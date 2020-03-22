namespace COVID.Domain.Entities.Views.Totais
{
  public class Regiao
  {
    public string UF { get; set; }
    public int Cidade { get; set; }
    public string Bairro { get; set; }
    public long Infectados { get; set; }
    public long Obitos { get; set; }
    public long Recuperados { get; set; }
  }
}
