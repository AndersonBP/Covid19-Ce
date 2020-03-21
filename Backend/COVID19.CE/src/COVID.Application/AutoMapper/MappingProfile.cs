using AutoMapper;
using COVID.Domain.Entities;
using COVID.Application.ViewModels;

namespace COVID.Application.AutoMapper
{
  public class MappingProfile : Profile
  {
    public MappingProfile()
    {
      CreateMap<Caso, CasoViewModel>().ReverseMap();
    }
  }
}
