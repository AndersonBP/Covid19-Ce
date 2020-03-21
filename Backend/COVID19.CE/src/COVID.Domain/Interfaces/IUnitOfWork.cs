using System;

namespace COVID.Domain.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        void Commit();
    }
}
