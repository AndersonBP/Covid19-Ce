using System;
using System.Collections.Generic;
using System.Text;

namespace COVID.Application.ViewModels
{
  public class BairrosAfetadosViewModel
  {
    public string Nome { get; set; }
    public string Cidade { get; set; }
    public List<Coordenada> Coordenadas { get; set; }
  }

  public class Coordenada
  {
    public decimal Latitude { get; set; }
    public decimal Longitude { get; set; }
  }
}
