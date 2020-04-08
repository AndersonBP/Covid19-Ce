import { Model } from '../../api/models/Model';
import { ObjectMapper, JsonProperty } from 'json-object-mapper';

export class EvidenceModel extends Model implements IModel {
  @JsonProperty({ name: "id" })
  public id: string = '';

  @JsonProperty({ name: "choice_id" })
  public choice_id: string = '';

  static Create(json: any): EvidenceModel {
    return ObjectMapper.deserialize<EvidenceModel>(EvidenceModel, json);
  }
}
