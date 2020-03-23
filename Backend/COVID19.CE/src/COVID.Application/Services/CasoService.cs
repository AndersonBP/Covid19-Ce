using System;
using AutoMapper;
using COVID.Domain.Interfaces;
using System.Collections.Generic;
using COVID.Application.Interfaces;
using COVID.Application.ViewModels;

namespace COVID.Application.Services
{
  public class CasoService : ICasoService
  {
    private readonly IMapper _mapper;
    private readonly IUnitOfWork _uow;
    private readonly ICasoRepository _casoRepository;

    public CasoService(IMapper mapper, IUnitOfWork uow, ICasoRepository casoRepository)
    {
      _uow = uow;
      _mapper = mapper;
      _casoRepository = casoRepository;
    }

    public CasoViewModel GetById(Guid id)
    {
      return _mapper.Map<CasoViewModel>(_casoRepository.GetById(id));
    }

    public IEnumerable<CasoViewModel> GetAll()
    {
      return _mapper.Map<List<CasoViewModel>>(_casoRepository.GetAll());
    }

    public void Dispose()
    {
      _casoRepository.Dispose();
    }
  }
}
