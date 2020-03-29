import { JsonProperty, ObjectMapper } from "json-object-mapper";
import { Model } from "./Model";
import { RegiaoModel } from "./regiao.model";

export class QuestionarioModel extends Model implements IModel {
  @JsonProperty({ name: "sex" })
  public sexo: string;

  @JsonProperty({ name: "age" })
  public idade: number = 0;

  @JsonProperty({ name: "evidence" })
  public evidencias: EvidenciaModel[];

  static Create(json: any): QuestionarioModel {
    return ObjectMapper.deserialize<QuestionarioModel>(QuestionarioModel, json);
  }
}

export class EvidenciaModel extends Model implements IModel {
  @JsonProperty({ name: "id" })
  public id: string;

  @JsonProperty({ name: "choice_id" })
  public choiceId: number = 0;

  static Create(json: any): EvidenciaModel {
    return ObjectMapper.deserialize<EvidenciaModel>(EvidenciaModel, json);
  }
}

export class RespostasTriageModel extends Model implements IModel {
  @JsonProperty({ name: "infectados" })
  public infectados: number = 0;

  @JsonProperty({ name: "obitos" })
  public obitos: number = 0;

  @JsonProperty({ name: "Recuperados" })
  public recuperados: number = 0;

  @JsonProperty({ name: "regioes" })
  public regioes: RegiaoModel[] = [];

  @JsonProperty({ name: "data" })
  public data: string = "";

  @JsonProperty({ name: "uf" })
  public uf: string = "";

  static Create(json: any): RespostasTriageModel {
    return ObjectMapper.deserialize<RespostasTriageModel>(
      RespostasTriageModel,
      json
    );
  }
}

export class QuestionarioResponseModel extends Model implements IModel {
    @JsonProperty({ name: "conditions" })
    public condicoes: any[];
  
    @JsonProperty({ name: "extras" })
    public extras: any;

    @JsonProperty({ name: "question" })
    public questoes: any;
  
    static Create(json: any): QuestionarioResponseModel {
      return ObjectMapper.deserialize<QuestionarioResponseModel>(QuestionarioResponseModel, json);
    }
  }

  export class QuestoesModel extends Model implements IModel {
    @JsonProperty({ name: "explanation" })
    public explicacao: string;
  
    @JsonProperty({ name: "extras" })
    public extras: any;

    @JsonProperty({ name: "items" })
    public items: QuestaoModel[];
  
    static Create(json: any): QuestoesModel {
      return ObjectMapper.deserialize<QuestoesModel>(QuestoesModel, json);
    }
  }

  export class QuestaoModel extends Model implements IModel {
    @JsonProperty({ name: "id" })
    public id: string;

    @JsonProperty({ name: "name" })
    public name: string;
    
    @JsonProperty({ name: "explanation" })
    public explicacao: string;

    @JsonProperty({ name: "choices" })
    public escolhas: any[];
  
    static Create(json: any): QuestaoModel {
      return ObjectMapper.deserialize<QuestaoModel>(QuestaoModel, json);
    }
  }

  export class EscolhaModel extends Model implements IModel {
    @JsonProperty({ name: "id" })
    public id: string;

    @JsonProperty({ name: "label" })
    public label: string;
  
    static Create(json: any): EscolhaModel {
      return ObjectMapper.deserialize<EscolhaModel>(EscolhaModel, json);
    }
  }
