using System;

namespace COVID.Application.ViewModels
{
  public class CasoViewModel
  {
    public Guid Id { get; set; }

    public char UF { get; set; }
    public int Cidade { get; set; }
    public string Bairro { get; set; }
    public char Sexo { get; set; }
    public int FaixaEtaria { get; set; }
    public bool Suspeito { get; set; }
    public bool Confirmado { get; set; }
    public bool Descartado { get; set; }
    public bool Obito { get; set; }
    public DateTime Date { get; set; }
  }
}
