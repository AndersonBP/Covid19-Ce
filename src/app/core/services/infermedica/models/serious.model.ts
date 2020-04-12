import { Model } from '../../api/models/Model';
import { ObjectMapper, JsonProperty } from 'json-object-mapper';

export class SeriousModel extends Model implements IModel {
  @JsonProperty({ name: "id" })
  public id: string;

  @JsonProperty({ name: "common_name" })
  public commonName: string;

  @JsonProperty({ name: "is_emergency" })
  public is_emergency: boolean;

  @JsonProperty({ name: "name" })
  public name: string;

  static Create(json: any): SeriousModel {
    return ObjectMapper.deserialize<SeriousModel>(SeriousModel, json);
  }
}
