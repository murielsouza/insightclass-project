import { Component, OnInit } from '@angular/core';
import {MissoesService} from '../missoes.service';

@Component({
  selector: 'app-lista-missoes',
  templateUrl: './lista-missoes.component.html',
  styleUrls: ['./lista-missoes.component.css']
})
export class ListaMissoesComponent implements OnInit {
  missoes = null;
  status = null;
  situacao = null;
  constructor(private missaoService: MissoesService) {
    this.todasMissoes();
  }

  ngOnInit() {
  }

  todasMissoes() {
    this.missaoService.todasMissoes().subscribe(
      missoes => {
        this.missoes = missoes;
        this.status = true;
      }, () => this.status = false
    );
  }

}
