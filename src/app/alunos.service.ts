import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  API_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  listarAlunos() {
    return this.http.get(this.API_URL + '/alunos/');
  }
}



