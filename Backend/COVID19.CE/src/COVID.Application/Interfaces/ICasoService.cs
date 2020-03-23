using System;
using System.Collections.Generic;
using COVID.Application.ViewModels;

namespace COVID.Application.Interfaces
{
  public interface ICasoService : IDisposable
  {
    IEnumerable<CasoViewModel> GetAll();
    CasoViewModel GetById(Guid id);
  }
}
