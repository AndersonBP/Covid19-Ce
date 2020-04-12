import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Http, Headers } from '@angular/http';
import { LoadingService } from '../loading.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ObjectMapper } from 'json-object-mapper';
import { QuizModel } from './models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class InfermedicaService {
  private readonly BASE_URL: URL = new URL(environment.InfermedicaUrl);
  private readonly API_ID: string = environment.InfermedicaId;
  private readonly API_KEY: string = environment.InfermedicaKey;

  constructor(private _http: Http, private loading: LoadingService) { }

  private getEndpoint(path): string {
    return this.BASE_URL + path;
  }

  private getHeader(): Headers {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Model', 'infermedica-pt-br');
    headers.append('App-Id', this.API_ID.toString());
    headers.append('App-Key', this.API_KEY.toString());

    return headers
  }

  private getBody(obj: any) {
    let _body: any = null;
    if (typeof (obj) === 'string') {
      _body = obj;
    } else {
      _body = ObjectMapper.serialize(obj);
      _body = _body.length > 1 ? _body : obj.toJSON();
    }

    return _body;
  }

  private post(uri: string, body: any) {
    this.loading.show();
    let _headers = this.getHeader();
    let _body = this.getBody(body);

    return new Observable<any>(observer => {
      this._http
        .post(this.getEndpoint(uri), _body, { headers: _headers })
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

  public diagnosis(quiz: any): Observable<any> {
    return this.post('diagnosis', quiz);
  }

  public triage(quiz: any): Observable<any> {
    return this.post('triage', quiz);
  }
}
