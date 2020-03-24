using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using COVID.Application.Interfaces;
using COVID.Application.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace COVID.Service.Api.Controllers
{
  [Route("api/casos")]
  [ApiController]
  public class CasosController : ControllerBase
  {
    private readonly ICasoService _casoService;
    private readonly ITotalRegiaoService _totalRegiaoService;
    private readonly ITotalGeralUfService _totalGeralUfService;
    private readonly IBairrosAfetadosService _bairrosAfetadosService;

    public CasosController(ICasoService casoService, ITotalRegiaoService totalRegiaoService, IBairrosAfetadosService bairrosAfetadosService,
      ITotalGeralUfService totalGeralUfService)
    {
      _casoService = casoService;
      _totalRegiaoService = totalRegiaoService;
      _totalGeralUfService = totalGeralUfService;
      this._bairrosAfetadosService = bairrosAfetadosService;
    }

    [HttpGet]
    public IEnumerable<CasoViewModel> Get()
    {
      return _casoService.GetAll();
    }

    [HttpGet("{id}", Name = "Get")]
    public CasoViewModel Get(Guid id)
    {
      return  _casoService.GetById(id);
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

    [HttpGet("totalcidadesuf/{uf}")]
    public IEnumerable<TotalViewModel> TotalCidadePorUf(string uf)
    {
      return _totalRegiaoService.TotalCidade(uf);
    }

    [HttpGet("bairrosafetados/{cidade}")]
    public IEnumerable<BairrosAfetadosViewModel> BairrosAfetados(string cidade)
    {
      return this._bairrosAfetadosService.BuscarPorCidade(cidade);
    }

    //[HttpPost]
    //public void Post([FromBody] string value)
    //{
    //}

    //[HttpPut("{id}")]
    //public void Put(int id, [FromBody] string value)
    //{
    //}

    //[HttpDelete("{id}")]
    //public void Delete(int id)
    //{
    //}
  }
}
