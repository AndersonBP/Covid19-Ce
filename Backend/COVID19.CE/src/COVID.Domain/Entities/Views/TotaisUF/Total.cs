using System;
using System.Collections.Generic;
using System.Text;

namespace COVID.Domain.Entities.Views.TotaisUF
{
  public class Total
  {
    public long Infectados { get; set; }
    public long Obitos { get; set; }
    public long Recuperados { get; set; }
    public string UF { get; set; }
  }
}
