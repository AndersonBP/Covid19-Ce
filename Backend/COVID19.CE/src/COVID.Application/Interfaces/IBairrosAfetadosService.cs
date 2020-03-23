using COVID.Application.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace COVID.Application.Interfaces
{
  public interface IBairrosAfetadosService : IDisposable
  {
    List<BairrosAfetadosViewModel> BuscarPorCidade(string cidade);
  }
}
