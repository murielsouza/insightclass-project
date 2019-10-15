import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrabalhosService {
  API_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  todosTrabalhos() {
    return this.http.get(this.API_URL + '/trabalhos/');
  }
}
