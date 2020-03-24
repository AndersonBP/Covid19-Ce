using COVID.Domain.Interfaces;
using COVID.Infra.Data.Context;
using COVID.Domain.Entities.Views;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Dapper;
using System.Linq;

namespace COVID.Infra.Data.Repository
{
  public class TotalGeralUfRepository : Repository<TotalGeralUf>, ITotalGeralUfRepository
  {
    public TotalGeralUfRepository(CovidContext context) : base(context)
    {
    }

    public IEnumerable<TotalGeralUf> ObterPorUf(string uf)
    {
      var sql = $"select * from totalufdata where uf = '{uf.ToUpper()}' order by data, infectados desc";

      var total = Db.Database.GetDbConnection().Query<TotalGeralUf>(sql);

      return total.ToList();
    }
  }
}
