import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Aluno} from './aluno.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  API_URL = 'http://18.189.43.35:8080/';

  constructor(private http: HttpClient) { }

  listarAlunos() {
    this.http.get(this.API_URL + '/gerarclassificacao/')
    return this.http.get(this.API_URL + '/alunos/');
  }

  getAluno(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(this.API_URL + '/alunos/' + id + '/');
  }

  ordernarPorMedia(a, b) {
    return a.media - b.media;
  }
}



