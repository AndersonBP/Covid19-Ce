import { HttpService } from "../http.service";
import { Injectable } from "@angular/core";

@Injectable()
export class BoletimService {
  constructor(private http: HttpService) {}

  public getTotais() {
    this.http.get("casos/totais").subscribe();
  }
}
