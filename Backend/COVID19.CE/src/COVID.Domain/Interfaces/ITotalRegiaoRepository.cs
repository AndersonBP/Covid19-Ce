using System;
using System.Collections.Generic;

namespace COVID.Domain.Interfaces
{
  public interface ITotalRegiaoRepository : IRepository<Entities.Views.Totais.Total>
  {
    List<Domain.Entities.Views.Totais.Total> TotalCidade(string uf);
  }
}
