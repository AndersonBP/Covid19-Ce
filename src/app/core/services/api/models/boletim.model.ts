import { JsonProperty, ObjectMapper } from "json-object-mapper";
import { Model } from "./Model";
import { RegiaoModel } from "./regiao.model";

export class BoletimModel extends Model implements IModel {
  @JsonProperty({ name: "infectados" })
  public infectados: number = 0;

  @JsonProperty({ name: "obitos" })
  public obitos: number = 0;

  @JsonProperty({ name: "recuperados" })
  public recuperados: number = 0;

  @JsonProperty({ name: "regioes" })
  public regioes: RegiaoModel[] = [];

  @JsonProperty({ name: "data" })
  public data: string = "";

  @JsonProperty({ name: "uf" })
  public uf: string = "";

  static Create(json: any): BoletimModel {
    return ObjectMapper.deserialize<BoletimModel>(BoletimModel, json);
  }
}
