import { Component, OnInit } from '@angular/core';
import {AlunosService} from '../alunos.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Aluno} from '../aluno.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  aluno = null;
  constructor(private alunoService: AlunosService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    // tslint:disable-next-line:radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.alunoService.getAluno(id)
      .subscribe(aluno => this.aluno = aluno,
        erro => this.router.navigate(['turma-nao-encontrada']));
  }
}
