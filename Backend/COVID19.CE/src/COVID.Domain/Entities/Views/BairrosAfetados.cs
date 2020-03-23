using System;
using System.Collections.Generic;
using System.Text;

namespace COVID.Domain.Entities.Views
{
  public class BairrosAfetados
  {
    public string Nome { get; set; }
    public int Codigo { get; set; }
    public string Cidade { get; set; }
    public decimal Latitude { get; set; }
    public decimal Longitude { get; set; }
  }

}
