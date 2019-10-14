import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TabelaClassificacaoComponent} from './tabela-classificacao/tabela-classificacao.component';

const routes: Routes = [
  {path: 'tabeladeclassificacao', component: TabelaClassificacaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
