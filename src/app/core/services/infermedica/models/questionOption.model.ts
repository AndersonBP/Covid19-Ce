import { Model } from '../../api/models/Model';
import { ObjectMapper, JsonProperty } from 'json-object-mapper';

export class QuestionOptionModel extends Model implements IModel {
  @JsonProperty({ name: "choices" })
  public choices: any[];

  @JsonProperty({ name: "explanation" })
  public explanation: string;

  @JsonProperty({ name: "id" })
  public id: string;

  @JsonProperty({ name: "name" })
  public name: string;

  static Create(json: any): QuestionOptionModel {
    return ObjectMapper.deserialize<QuestionOptionModel>(QuestionOptionModel, json);
  }
}
