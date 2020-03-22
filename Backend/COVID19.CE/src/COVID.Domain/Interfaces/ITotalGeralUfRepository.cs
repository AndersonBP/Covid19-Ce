using System.Collections.Generic;
using COVID.Domain.Entities.Views;

namespace COVID.Domain.Interfaces
{
  public interface ITotalGeralUfRepository : IRepository<TotalGeralUf>
  {
    IEnumerable<TotalGeralUf> ObterPorUf(string uf);
  }
}
