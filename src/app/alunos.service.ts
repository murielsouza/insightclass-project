import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Aluno} from './aluno.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  API_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  listarAlunos() {
    return this.http.get(this.API_URL + '/alunos/');
  }

  getAluno(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(this.API_URL + '/alunos/' + id + '/');
  }
}



