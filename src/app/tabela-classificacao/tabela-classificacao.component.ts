import { Component, OnInit } from '@angular/core';
import {AlunosService} from '../alunos.service';

@Component({
  selector: 'app-tabela-classificacao',
  templateUrl: './tabela-classificacao.component.html',
  styleUrls: ['./tabela-classificacao.component.css']
})
export class TabelaClassificacaoComponent implements OnInit {
  alunos = null;
  status = null;

  constructor(private alunosService: AlunosService) {
    this.listarAlunos();
  }

  ngOnInit() {
  }

  listarAlunos() {
    this.alunosService.listarAlunos().subscribe(
      alunos => {
        this.alunos = alunos;
      }, () => this.status = false
    );
  }

}
