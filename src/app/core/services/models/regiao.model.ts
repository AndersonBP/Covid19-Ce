import { JsonProperty, ObjectMapper } from "json-object-mapper";
import { Model } from "./Model";

export class RegiaoModel extends Model implements IModel {
  @JsonProperty({ name: "latitude" })
  public latitude: number = 0.0;

  @JsonProperty({ name: "longitude" })
  public longitude: number = 0.0;

  @JsonProperty({ name: "uf" })
  public uf: string = "";

  @JsonProperty({ name: "cidade" })
  public cidade: string = "";

  @JsonProperty({ name: "bairro" })
  public bairro: string = "";

  @JsonProperty({ name: "infectados" })
  public infectados: number = 0;

  @JsonProperty({ name: "obitos" })
  public obitos: number = 0;

  @JsonProperty({ name: "recuperados" })
  public recuperados: number = 0;

  static Create(json: any): RegiaoModel {
    return ObjectMapper.deserialize<RegiaoModel>(RegiaoModel, json);
  }
}
