import { Model } from '../../api/models/Model';
import { JsonProperty, ObjectMapper } from "json-object-mapper";
import { EvidenceModel } from './evidence.model';

export class QuizModel extends Model implements IModel {
  @JsonProperty({ name: "sex" })
  public sex: string = "";

  @JsonProperty({ name: "age" })
  public age: number = 0;

  @JsonProperty({ name: "evidence" })
  public evidence: EvidenceModel[] = [];

  static Create(json: any): QuizModel {
    return ObjectMapper.deserialize<QuizModel>(QuizModel, json);
  }
}
