import { JsonProperty, ObjectMapper } from "json-object-mapper";
import { Model } from "./Model";
import { RegiaoModel } from "./regiao.model";

export class TotalModel extends Model implements IModel {
  @JsonProperty({ name: "suspeitos" })
  public suspeitos: number = 0;

  @JsonProperty({ name: "infectados" })
  public infectados: number = 0;

  @JsonProperty({ name: "obitos" })
  public obitos: number = 0;

  @JsonProperty({ name: "recuperados" })
  public recuperados: number = 0;

  @JsonProperty({ name: "totalInfectados" })
  public totalinfectados: number = 0;

  @JsonProperty({ name: "totalObitos" })
  public totalobitos: number = 0;

  @JsonProperty({ name: "totalRecuperados" })
  public totalrecuperados: number = 0;

  @JsonProperty({ name: "data" })
  public data: string = "";

  @JsonProperty({ name: "nomeCidade" })
  public nomecidade: string = "";

  @JsonProperty({ name: "uf" })
  public uf: string = "";

  @JsonProperty({ name: "latitude" })
  public latitude: number = 0.0;

  @JsonProperty({ name: "longitude" })
  public longitude: number = 0.0;

  get Resumido(): {
    Cidade: string;
    Infectados: number;
    Obitos: number;
    Coordenadas: number[];
  } {
    return {
      Cidade: this.nomecidade.trim(),
      Infectados: this.infectados,
      Obitos: this.obitos,
      Coordenadas: [this.longitude, this.latitude]
    };
  }

  static Create(json: any): TotalModel {
    return ObjectMapper.deserialize<TotalModel>(TotalModel, json);
  }
}
