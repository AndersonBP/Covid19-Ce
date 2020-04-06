import { Model } from '../../api/models/Model';
import { ObjectMapper, JsonProperty } from 'json-object-mapper';

export class TriageModel extends Model implements IModel {
  @JsonProperty({ name: "description" })
  public description: string;

  @JsonProperty({ name: "label" })
  public label: string;

  @JsonProperty({ name: "serious" })
  public serious: any[];

  @JsonProperty({ name: "triage_level" })
  public triageLevel: any;

  static Create(json: any): TriageModel {
    return ObjectMapper.deserialize<TriageModel>(TriageModel, json);
  }

  triageLevelDescription() {
    const levels = [{
      type: 'no_risk',
      description: 'Siga as medidas preventivas.'
    },
    {
      type: 'self_monitoring',
      description: 'Fique em casa e monitore seus sintomas.'
    },
    {
      type: 'quarantine',
      description: 'Quarentena.'
    },
    {
      type: 'isolation_call',
      description: 'Consulte o médico. Evite todo contato.'
    },
    {
      type: 'call_doctor',
      description: 'Ligue para um médico, os sintomas podem não estar diretamente relacionados ao COVID-19.'
    },
    {
      type: 'isolation_ambulance',
      description: 'Ligue para o número de emergência. Evite todo contato.'
    }];

    return levels.find(f => f.type === this.triageLevel);
  }
}
