import { CoordenadaModel } from './coordenada.model';
import { JsonProperty, ObjectMapper } from "json-object-mapper";
import { Model } from "./Model";

export class BairroAfetadoModel extends Model implements IModel {
  @JsonProperty({ name: "nome" })
  public nome: number = 0;

  @JsonProperty({ name: "cidade" })
  public cidade: number = 0;


  @JsonProperty({ name: "coordenadas" })
  public coordenadas: CoordenadaModel[] = [];

  static Create(json: any): BairroAfetadoModel {
    return ObjectMapper.deserialize<BairroAfetadoModel>(
      BairroAfetadoModel,
      json
    );
  }
}
