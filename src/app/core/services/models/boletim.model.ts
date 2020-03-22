import { JsonProperty, ObjectMapper } from "json-object-mapper";
import { Model } from "./Model";
import { RegiaoModel } from './regiao.model';

export class BoletimModel extends Model implements IModel {
  @JsonProperty({ name: "totalInfectados" })
  public infectados: number = 0;

  @JsonProperty({ name: "totalObitos" })
  public obitos: number = 0;

  @JsonProperty({ name: "totalRecuperados" })
  public recuperados: number = 0;

  @JsonProperty({ name: "regioes" })
  public regioes: RegiaoModel[] = [];

  static Create(json: any): BoletimModel {
    return ObjectMapper.deserialize<BoletimModel>(BoletimModel, json);
  }
}
