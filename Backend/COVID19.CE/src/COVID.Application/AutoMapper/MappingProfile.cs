using AutoMapper;
using COVID.Domain.Entities;
using COVID.Domain.Entities.Views;
using COVID.Application.ViewModels;

namespace COVID.Application.AutoMapper
{
  public class MappingProfile : Profile
  {
    public MappingProfile()
    {
      CreateMap<Caso, CasoViewModel>().ReverseMap();
      CreateMap<TotalGeralUf, TotalGeralUfViewModel>().ReverseMap();
      CreateMap<Domain.Entities.Views.Totais.Total, TotalViewModel>().ReverseMap();
      CreateMap<Domain.Entities.Views.Totais.Total, RegiaoViewModel>().ReverseMap();
    }
  }
}
