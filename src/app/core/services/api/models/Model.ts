import { ObjectMapper } from "json-object-mapper";

export abstract class Model {
  public toJSON(): string {
    return <string>ObjectMapper.serialize(this);
  }
}
