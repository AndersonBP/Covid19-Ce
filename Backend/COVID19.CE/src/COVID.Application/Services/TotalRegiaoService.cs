using System;
using AutoMapper;
using COVID.Domain.Interfaces;
using COVID.Application.Interfaces;
using COVID.Application.ViewModels;
using System.Collections.Generic;
using System.Linq;

namespace COVID.Application.Services
{
  public class TotalRegiaoService : ITotalRegiaoService
  {
    private readonly IMapper _mapper;
    private readonly IUnitOfWork _uow;
    private readonly ITotalRegiaoRepository _totalRegiaoRepository;

    public TotalRegiaoService(IMapper mapper, IUnitOfWork uow, ITotalRegiaoRepository totalRegiaoRepository)
    {
      _uow = uow;
      _mapper = mapper;
      _totalRegiaoRepository = totalRegiaoRepository;
    }

    public List<TotalRegiaoViewModel> Total()
    {
      var totais = new List<TotalRegiaoViewModel>();
      var resultados = _totalRegiaoRepository.GetAll();
      var datas = resultados.Select(c => c.Data).Distinct();
      foreach (var data in datas)
      {
        var regioes = resultados.Where(c => c.Data == data);
        var total = regioes.FirstOrDefault();
        totais.Add(new TotalRegiaoViewModel
        {
          Data = total.Data,
          TotalInfectados = total != null ? total.TotalInfectados : 0,
          TotalObitos = total != null ? total.TotalObitos : 0,
          TotalRecuperados = total != null ? total.TotalRecuperados : 0,
          Regioes = _mapper.Map<List<RegiaoViewModel>>(regioes)
        });
      }
      return totais;
    }

    public List<TotalViewModel> TotalCidade(string uf)
    {
      var resultados = _totalRegiaoRepository.TotalCidade(uf);
      return _mapper.Map<List<TotalViewModel>>(resultados);
    }

    public void Dispose()
    {
      _totalRegiaoRepository.Dispose();
    }

    public List<TotalViewModel> TotalDiaUF(string uf)
    {
      var resultados = _totalRegiaoRepository.TotalDiaUF(uf);
      return _mapper.Map<List<TotalViewModel>>(resultados);
    }
  }
}
