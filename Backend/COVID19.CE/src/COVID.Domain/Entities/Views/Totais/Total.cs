using System;
using System.Collections.Generic;
using System.Text;

namespace COVID.Domain.Entities.Views.Totais
{
  public class Total
  {
    public Total()
    {
      Regioes = new List<Regiao>();
    }

    public long TotalRecuperados { get; set; }
    public long TotalObitos { get; set; }
    public long TotalInfectados { get; set; }

    public DateTime Data { get; set; }

    public string UF { get; set; }
    public int? Cidade { get; set; }
    public string Bairro { get; set; }
    public long Descartados { get; set; }
    public long Infectados { get; set; }
    public long Obitos { get; set; }
    public long Recuperados { get; set; }
    public long Suspeitos { get; set; }
    public string NomeCidade { get; set; }

    public decimal Latitude { get; set; }
    public decimal Longitude { get; set; }

    public virtual ICollection<Regiao> Regioes { get; set; }

    public string jsoncoordenada { get; set; }

    //public void AtribuirEndereco(Regiao regiao)
    //{
    //  if (!endereco.EhValido()) return;

    //  Endereco = endereco;
    //}
  }
}
