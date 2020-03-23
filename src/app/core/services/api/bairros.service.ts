import { BairroAfetadoModel } from './models/bairroAfetado.model';
import { Response } from "./models/response.model";
import { BoletimModel } from "./models/boletim.model";
import { HttpService } from "../http.service";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class BairrosService {
  constructor(private http: HttpService) {}

  public getAfetados(): Observable<Response<BairroAfetadoModel[]>> {
    return this.http.get("casos/bairrosafetados/fortaleza").pipe(
      map(res => {
        const response = new Response<BairroAfetadoModel[]>();
        response.Data = res.map(el => {
          return BairroAfetadoModel.Create(el);
        });
        return response;
      })
    );
  }
}
