using System;
using System.Collections.Generic;
using COVID.Application.ViewModels;

namespace COVID.Application.Interfaces
{
  public interface ITotalRegiaoService : IDisposable
  {
    List<TotalRegiaoViewModel> Total();
    List<TotalViewModel> TotalCidade(string uf);
    List<TotalViewModel> TotalDiaUF(string uf);
  }
}
