using COVID.Domain.Entities;
using COVID.Domain.Interfaces;
using COVID.Infra.Data.Context;

namespace COVID.Infra.Data.Repository
{
  public class CasoRepository : Repository<Caso>, ICasoRepository
  {
    public CasoRepository(CovidContext context) : base(context)
    {
    }
  }
}
