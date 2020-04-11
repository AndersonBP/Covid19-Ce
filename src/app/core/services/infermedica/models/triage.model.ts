import { Model } from '../../api/models/Model';
import { ObjectMapper, JsonProperty } from 'json-object-mapper';

export class TriageModel extends Model implements IModel {
  @JsonProperty({ name: "description" })
  public description: string = '';

  @JsonProperty({ name: "label" })
  public label: string = '';

  @JsonProperty({ name: "serious" })
  public serious: any[] = [];

  @JsonProperty({ name: "triage_level" })
  public triage_level: string = '';

  static Create(json: any): TriageModel {
    return ObjectMapper.deserialize<TriageModel>(TriageModel, json);
  }
}
