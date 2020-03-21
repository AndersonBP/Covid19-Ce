using COVID.Domain.Entities.Base;
using System;
using System.Collections.Generic;
using System.Text;

namespace COVID.Domain.Entities
{
  public class Caso : EntityBase
  {
    public string UF { get; set; }

    public int Cidade { get; set; }
    //public int CidadeId { get; set; }
    //public virtual Cidade Cidade { get; set; }

    public string Bairro { get; set; }
    public char Sexo { get; set; }

    public int FaixaEtaria { get; set; }
    //public int FaixaEtariaId { get; set; }
    //public virtual FaixaEtaria FaixaEtaria { get; set; }

    public bool Suspeito { get; set; }
    public bool Confirmado { get; set; }
    public bool Descartado { get; set; }
    public bool Obito { get; set; }
    public DateTime Data { get; set; }
  }
}
