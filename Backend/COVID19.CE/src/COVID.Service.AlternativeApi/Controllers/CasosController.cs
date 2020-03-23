using System;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using COVID.Application.Interfaces;
using COVID.Application.ViewModels;

namespace COVID.Service.AlternativeApi.Controllers
{
  [Route("api/casos")]
  [ApiController]
  public class CasosController : ControllerBase
  {
    private readonly ICasoService _casoService;
    private readonly ITotalRegiaoService _totalRegiaoService;
    private readonly ITotalGeralUfService _totalGeralUfService;

    public CasosController(ICasoService casoService, ITotalRegiaoService totalRegiaoService,
      ITotalGeralUfService totalGeralUfService)
    {
      _casoService = casoService;
      _totalRegiaoService = totalRegiaoService;
      _totalGeralUfService = totalGeralUfService;
    }

    [HttpGet]
    public IEnumerable<CasoViewModel> Get()
    {
      return _casoService.GetAll();
    }

    [HttpGet("{id}", Name = "Get")]
    public CasoViewModel Get(Guid id)
    {
      return _casoService.GetById(id);
    }

    [HttpGet("totais")]
    public IEnumerable<TotalRegiaoViewModel> Totais()
    {
      return _totalRegiaoService.Total();
    }

    [HttpGet("totalgeral/{uf}")]
    public IEnumerable<TotalGeralUfViewModel> TotalGeralUf(string uf)
    {
      return _totalGeralUfService.ObterPorUf(uf);
    }

    [HttpGet("somapordia/{uf}")]
    public IEnumerable<TotalRegiaoViewModel> SomaPorDia(string uf)
    {
      return _totalRegiaoService.Total();
    }

    [HttpGet("totalcidade/{cidade}")]
    public IEnumerable<TotalRegiaoViewModel> TotalCidade(string cidade)
    {
      return _totalRegiaoService.Total();
    }

    [HttpGet("totalcidadeporuf/{uf}")]
    public IEnumerable<TotalRegiaoViewModel> TotalCidadePorUf(string uf)
    {
      return _totalRegiaoService.Total();
    }

  }
}
