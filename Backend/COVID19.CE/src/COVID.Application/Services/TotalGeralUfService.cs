using AutoMapper;
using COVID.Application.Interfaces;
using COVID.Application.ViewModels;
using COVID.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace COVID.Application.Services
{
  public class TotalGeralUfService : ITotalGeralUfService
  {
    private readonly IMapper _mapper;
    private readonly ITotalGeralUfRepository _totalGeralUfRepository;

    public TotalGeralUfService(IMapper mapper, ITotalGeralUfRepository totalGeralUfRepository)
    {
      _mapper = mapper;
      _totalGeralUfRepository = totalGeralUfRepository;
    }
    public IEnumerable<TotalGeralUfViewModel> ObterPorUf(string uf)
    {
      return _mapper.Map<List<TotalGeralUfViewModel>>(_totalGeralUfRepository.ObterPorUf(uf));
    }

    public void Dispose()
    {
      _totalGeralUfRepository.Dispose();
    }
  }
}
