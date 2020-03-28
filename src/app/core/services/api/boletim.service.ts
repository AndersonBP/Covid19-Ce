import { Response } from "./models/response.model";
import { BoletimModel } from "./models/boletim.model";
import { HttpService } from "../http.service";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { TotalModel } from "./models/total.model";

@Injectable()
export class BoletimService {
  constructor(private http: HttpService) {}

  public getTotais(): Observable<Response<BoletimModel[]>> {
    return this.http.get("casos/totalgeral/ce").pipe(
      map(res => {
        const response = new Response<BoletimModel[]>();
        response.Data = res.map(el => {
          return BoletimModel.Create(el);
        });
        return response;
      })
    );
  }

  public getTotalCidades(): Observable<Response<TotalModel[]>> {
    return this.http.get("casos/totalcidadesuf/ce").pipe(
      map(res => {
        const response = new Response<TotalModel[]>();
        response.Data = res
          .map(el => {
            return TotalModel.Create(el);
          })
          .filter(el => el.infectados > 0);
        return response;
      })
    );
  }

  public getTotalDiaUF(): Observable<Response<TotalModel[]>> {
    return this.http.get("casos/totaldiauf/ce").pipe(
      map(res => {
        const response = new Response<TotalModel[]>();
        response.Data = res
          .map(el => {
            return TotalModel.Create(el);
          });
        return response;
      })
    );
  }
}
