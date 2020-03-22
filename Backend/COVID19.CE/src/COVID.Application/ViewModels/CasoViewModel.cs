using System;

namespace COVID.Application.ViewModels
{
  public class CasoViewModel
  {
    public Guid Id { get; set; }

    public string UF { get; set; }
    public int Cidade { get; set; }
    public string Bairro { get; set; }
    public string Sexo { get; set; }
    public int? FaixaEtaria { get; set; }
    public int? Suspeito { get; set; }
    public int? Confirmado { get; set; }
    public int? Descartado { get; set; }
    public int? Obito { get; set; }
    public DateTime Date { get; set; }
  }
}
