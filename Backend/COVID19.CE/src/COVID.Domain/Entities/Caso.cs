using COVID.Domain.Entities.Base;
using System;

namespace COVID.Domain.Entities
{
  public class Caso : EntityBase
  {
    public string UF { get; set; }

    public int Cidade { get; set; }
    //public int CidadeId { get; set; }
    //public virtual Cidade Cidade { get; set; }

    public string Bairro { get; set; }
    public string Sexo { get; set; }

    public int? FaixaEtaria { get; set; }
    //public int FaixaEtariaId { get; set; }
    //public virtual FaixaEtaria FaixaEtaria { get; set; }

    public int Suspeito { get; set; }
    public int Confirmado { get; set; }
    public int Descartado { get; set; }
    public int Recuperado { get; set; }
    public int Obito { get; set; }
    public DateTime Data { get; set; }
  }
}
