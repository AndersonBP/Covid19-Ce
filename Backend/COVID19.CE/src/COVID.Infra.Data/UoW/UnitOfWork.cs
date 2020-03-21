using COVID.Domain.Interfaces;
using COVID.Infra.Data.Context;

namespace COVID.Infra.Data.UoW
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly CovidContext _context;

        public UnitOfWork(CovidContext context)
        {
            _context = context;
        }

        public void Commit()
        {
            _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
