import { JsonProperty, ObjectMapper } from "json-object-mapper";
import { Model } from "./Model";

export class CoordenadaModel extends Model implements IModel {
  @JsonProperty({ name: "latitude" })
  public latitude: number = 0;

  @JsonProperty({ name: "longitude" })
  public longitude: number = 0;

  static Create(json: any): CoordenadaModel {
    return ObjectMapper.deserialize<CoordenadaModel>(CoordenadaModel, json);
  }
}
