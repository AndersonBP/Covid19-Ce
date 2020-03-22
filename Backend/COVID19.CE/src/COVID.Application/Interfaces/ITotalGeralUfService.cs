using System;
using System.Collections.Generic;
using COVID.Application.ViewModels;

namespace COVID.Application.Interfaces
{
  public interface ITotalGeralUfService : IDisposable
  {
    IEnumerable<TotalGeralUfViewModel> ObterPorUf(string uf);
  }
}
