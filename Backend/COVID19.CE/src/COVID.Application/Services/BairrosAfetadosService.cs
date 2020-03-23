using System;
using AutoMapper;
using COVID.Domain.Interfaces;
using COVID.Application.Interfaces;
using COVID.Application.ViewModels;
using System.Collections.Generic;
using System.Linq;


namespace COVID.Application.Services
{
  public class BairrosAfetadosService : IBairrosAfetadosService
  {
    private readonly IMapper _mapper;
    private readonly IBairrosAfetadosRepository _bairrosAfetadosRepository;

    public BairrosAfetadosService(IMapper mapper, IBairrosAfetadosRepository bairrosAfetadosRepository)
    {
      _mapper = mapper;
      _bairrosAfetadosRepository = bairrosAfetadosRepository;
    }

    public List<BairrosAfetadosViewModel> BuscarPorCidade(string cidade)
    {
      return this._bairrosAfetadosRepository.Search(x => x.Cidade.ToLower().Equals(cidade.ToLower()))
        .GroupBy(x => new { x.Cidade, x.Nome }).ToList()
        .Select(x => new BairrosAfetadosViewModel() { Cidade = x.Key.Cidade.Trim(), Nome = x.Key.Nome, Coordenadas = x.Select(y => new Coordenada() { Latitude = y.Latitude, Longitude = y.Longitude }).ToList() }).ToList();
    }

    public void Dispose()
    {
      _bairrosAfetadosRepository.Dispose();
    }
  }
}
