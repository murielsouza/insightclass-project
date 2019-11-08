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
  cont = 0;
  frequencias = undefined;
  trabalhos = undefined;
  status = null;
  server = null;
  notaTemp = null;
  classificados = [];
  // tslint:disable-next-line:max-line-length
  constructor(private alunosService: AlunosService, private trabalhosService: TrabalhosService,
              private  frequenciaService: FrequenciasService, private router: Router) {
  }

  ngOnInit() {
      this.listarAlunos();
      //this.gerarClassificacao();
  }

  listarAlunos() {
    this.alunosService.listarAlunos().subscribe(
      alunos => {
        this.alunos = alunos;
        this.server = true;
      }, () => this.server = false
    );
    //this.todasFrequencias();
  }

  todosTrabalhos() {
    this.trabalhosService.todosTrabalhos().subscribe(
      trabalhos => {
        this.trabalhos = trabalhos;
      }, () => this.status = false
    );
    //this.gerarClassificacao();
  }

  todasFrequencias() {
    this.frequenciaService.todasFrequencias().subscribe(
      frequencias => {
        this.frequencias = frequencias;
      }, () => this.status = false
    );
    //this.todosTrabalhos();
  }

  abrir(aluno: Aluno) {
    this.router.navigate(['/alunos/', aluno.id]);
  }

  gerarClassificacao() {
    this.alunos[0].sort(function compare(a, b) {
      if (a.media < b.media) { return -1; }
      if (a.media > b.media) { return 1; }
      return 0;
    });
  }





}
