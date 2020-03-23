using COVID.Domain.Entities.Views;
using COVID.Domain.Interfaces;
using COVID.Infra.Data.Context;
using System;
using System.Collections.Generic;
using System.Text;

namespace COVID.Infra.Data.Repository
{
  public class BairrosAfetadosRepository: Repository<BairrosAfetados>, IBairrosAfetadosRepository
  {
    public BairrosAfetadosRepository(CovidContext context) : base(context)
    {
    }
  }
}
