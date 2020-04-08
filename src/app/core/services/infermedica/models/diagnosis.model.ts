import { Model } from '../../api/models/Model';
import { ObjectMapper, JsonProperty } from 'json-object-mapper';

export class DiagnosisModel extends Model implements IModel {
  @JsonProperty({ name: "question" })
  public question: any = null;

  @JsonProperty({ name: "should_stop" })
  public should_stop: boolean = false;

  @JsonProperty({ name: "conditions" })
  public conditions: any[] = [];

  @JsonProperty({ name: "extras" })
  public extras: any = null;

  @JsonProperty({ name: "explanation" })
  public explanation: any = null;

  static Create(json: any): DiagnosisModel {
    return ObjectMapper.deserialize<DiagnosisModel>(DiagnosisModel, json);
  }
}
