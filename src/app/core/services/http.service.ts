import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { LoadingService } from "./loading.service";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class HttpService {
  protected readonly BASE_URL: URL = new URL(environment.ApiUrl);

  constructor(private _http: Http, private loading: LoadingService) {
    console.log(this.BASE_URL)
  }

  private getEndpoint(path): string {
    return this.BASE_URL + path;
  }

  public get(uri: string, baseUrl?: string): Observable<any> {
    debugger
    this.loading.show();
    return new Observable<any>(observer => {
      this._http
        .get(this.getEndpoint(uri), {
          // headers: {}
        })
        .pipe(
          map(response => {
            return response.json();
          })
        )
        .subscribe(
          response => {
            observer.next(response);
            observer.complete();
            this.loading.close();
          },
          error => {
            this.loading.close();
            console.error("Erro ao enviar requisição!");
            observer.error(error);
          }
        );
    });
  }
}
