using System;
using System.Linq;
using System.Linq.Expressions;
using COVID.Domain.Interfaces;
using COVID.Infra.Data.Context;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace COVID.Infra.Data.Repository
{
  public abstract class Repository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        protected CovidContext Db;
        protected DbSet<TEntity> DbSet;

        protected Repository(CovidContext context)
        {
            Db = context;
            DbSet = Db.Set<TEntity>();
        }

        public virtual void Add(TEntity obj)
        {
            DbSet.Add(obj);
        }

        public void Update(TEntity obj)
        {
            DbSet.Update(obj);
        }

        public IEnumerable<TEntity> Search(Expression<Func<TEntity, bool>> predicate)
        {
            return DbSet.AsNoTracking().Where(predicate);
        }

        public TEntity GetById(Guid id)
        {
            return DbSet.Find(id);
        }

        public virtual IEnumerable<TEntity> GetAll()
        {
            return DbSet.ToList();
        }

        public void Remove(Guid id)
        {
            DbSet.Remove(DbSet.Find(id));
        }

        public int SaveChanges()
        {
            return Db.SaveChanges();
        }

        public void Dispose()
        {
            Db.Dispose();
        }
    }
}
