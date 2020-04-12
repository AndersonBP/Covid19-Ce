import { Model } from '../../api/models/Model';
import { ObjectMapper, JsonProperty } from 'json-object-mapper';

export class QuestionModel extends Model implements IModel {
  @JsonProperty({ name: "explanation" })
  public explanation: '';

  @JsonProperty({ name: "extras" })
  public extras: any = null;

  @JsonProperty({ name: "items" })
  public items: any[] = [];

  @JsonProperty({ name: "text" })
  public text: any = '';

  @JsonProperty({ name: "type" })
  public type: any = '';

  static Create(json: any): QuestionModel {
    return ObjectMapper.deserialize<QuestionModel>(QuestionModel, json);
  }
}
