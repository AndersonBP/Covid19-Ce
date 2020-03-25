using COVID.Domain.Entities.Views.Totais;
using COVID.Domain.Interfaces;
using COVID.Infra.Data.Context;
using Dapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace COVID.Infra.Data.Repository
{
  public class TotalRegiaoRepository : Repository<Domain.Entities.Views.Totais.Total>, ITotalRegiaoRepository
  {
    public TotalRegiaoRepository(CovidContext context) : base(context)
    {
    }

    public List<Total> TotalCidade(string UF)
    {
      var sql = string.Format("select * from public.totalCidade where uf='{0}' and Data>=(Select Data from public.totalCidade  order by data desc limit 1) order by data, infectados desc", UF.ToUpper());
      var total = Db.Database.GetDbConnection().Query<Domain.Entities.Views.Totais.Total>(sql);

      return total.ToList();
    }

    public List<Total> TotalDiaUF(string uf)
    {
      var sql = string.Format("select totalinfectados, totalobitos, data from totalcidade e where uf='{0}' group  by totalinfectados, totalobitos, data order by data desc limit 7", uf.ToUpper());
      var total = Db.Database.GetDbConnection().Query<Domain.Entities.Views.Totais.Total>(sql);

      return total.ToList();
    }


    //public override IEnumerable<Domain.Entities.Views.Totais.Total> GetAll()
    //{
    //  var sql = "select * from totalregiao ";

    //  var total = Db.Database.GetDbConnection().Query<Domain.Entities.Views.Totais.Total>(sql);

    //  return total.ToList();

    //  //IEnumerable<Domain.Entities.Views.Totais.Total> totais = null;
    //  //using (var multi = Db.Database.GetDbConnection().QueryMultiple(sql))
    //  //{
    //  //  totais = multi.Read<Domain.Entities.Views.Totais.Total>().Dump();
    //  //  if (totais != null)
    //  //  {
    //  //    var regioes = multi.Read<Domain.Entities.Views.Totais.Regiao>().ToList();
    //  //    foreach (var total in totais)
    //  //    {
    //  //      total.Regioes = regioes;
    //  //    }
    //  //  }
    //  //}

    //  //return totais;
    //}
  }
}
