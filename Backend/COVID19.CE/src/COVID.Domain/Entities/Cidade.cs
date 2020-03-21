using COVID.Domain.Entities.Base;

namespace COVID.Domain.Entities
{
  public class Cidade
  {
    public int Id { get; set; }
    public char UF { get; set; }
    public string Nome { get; set; }
  }
}
