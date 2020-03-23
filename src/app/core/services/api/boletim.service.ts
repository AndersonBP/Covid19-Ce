import { Response } from "./models/response.model";
import { BoletimModel } from "./models/boletim.model";
import { HttpService } from "../http.service";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

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
}
