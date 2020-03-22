using System;
using System.Collections.Generic;
using System.Text;

namespace COVID.Application.ViewModels
{
  public class TotalRegiaoViewModel
  {
    public TotalRegiaoViewModel()
    {
      Regioes = new List<RegiaoViewModel>();
    }

    public long TotalRecuperados { get; set; }
    public long TotalObitos { get; set; }
    public long TotalInfectados { get; set; }
    public DateTime Data { get; set; }

    public ICollection<RegiaoViewModel> Regioes { get; set; }
  }

  public class RegiaoViewModel
  {
    public string UF { get; set; }
    public int? Cidade { get; set; }
    public string Bairro { get; set; }
    public long Infectados { get; set; }
    public long Obitos { get; set; }
    public long Recuperados { get; set; }
    public long Suspeitos { get; set; }
    public long Descartados { get; set; }
  }
}
