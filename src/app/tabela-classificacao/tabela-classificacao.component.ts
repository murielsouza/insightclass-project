import { Component, OnInit } from '@angular/core';
import {Classificacao} from './classificacao.model';
import {AlunosService} from '../alunos.service';
import {TrabalhosService} from '../trabalhos.service';
import {FrequenciasService} from '../frequencias.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Aluno} from '../aluno.model';


@Component({
  selector: 'app-tabela-classificacao',
  templateUrl: './tabela-classificacao.component.html',
  styleUrls: ['./tabela-classificacao.component.css']
})
export class TabelaClassificacaoComponent implements OnInit {
  alunos = null;
  frequencias = null;
  trabalhos = null;
  status = null;
  server = null;
  notaTemp = null;
  classificados = [];
  // tslint:disable-next-line:max-line-length
  constructor(private alunosService: AlunosService, private trabalhosService: TrabalhosService,
              private  frequenciaService: FrequenciasService, private router: Router) {
    this.listarAlunos();
    this.todasFrequencias();
    this.todosTrabalhos();
    //this.gerarClassificacao();
    console.log(this.frequencias);
  }

  ngOnInit() {
  }

  listarAlunos() {
    this.alunosService.listarAlunos().subscribe(
      alunos => {
        this.alunos = alunos;
        this.server = true;
      }, () => this.server = false
    );
  }

  todosTrabalhos() {
    this.trabalhosService.todosTrabalhos().subscribe(
      trabalhos => {
        this.trabalhos = trabalhos;
      }, () => this.status = false
    );
  }

  todasFrequencias() {
    this.frequenciaService.todasFrequencias().subscribe(
      frequencias => {
        this.frequencias = frequencias;
      }, () => this.status = false
    );
  }

  abrir(aluno: Aluno) {
    this.router.navigate(['/alunos/', aluno.id]);
  }

  gerarClassificacao() {
    for (let a = 0; this.alunos.length > a; a++) {
      for (let f = 0; this.frequencias.length > f; f++) {
        if ((this.frequencias[f].aluno).id === this.alunos[a].id) {
           if (this.frequencias[f].aula1) {
             this.notaTemp = this.notaTemp + 15;
           }
           if (this.frequencias[f].aula2) {
            this.notaTemp = this.notaTemp + 15;
          }
        }
      }
      for (let t = 0; this.frequencias.length > t; t++){
        if ((this.trabalhos[t].aluno).id === this.alunos[a].id){
            this.notaTemp = this.notaTemp + ((this.trabalhos[t].nota) * 10);
        }
      }
      this.classificados.push(new Classificacao(this.alunos[a].nome, this.notaTemp));
    }

    this.classificados.sort(function compare(a, b) {
      if (a.nota < b.nota) { return -1; }
      if (a.nota > b.nota) { return 1; }
      return 0;
    });
  }





}
