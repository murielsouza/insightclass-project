import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TabelaClassificacaoComponent} from './tabela-classificacao/tabela-classificacao.component';
import {HomeComponent} from './home/home.component';
import {Erro404Component} from './erro404/erro404.component';
import {ListaMissoesComponent} from './lista-missoes/lista-missoes.component';
import {PerfilComponent} from './perfil/perfil.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  { path: 'index', component: HomeComponent },
  { path: 'tabeladeclassificacao', component: TabelaClassificacaoComponent },
  { path: 'alunos/:id', component: PerfilComponent },
  { path: 'missoes', component: ListaMissoesComponent },
  { path: 'sobre', component: AboutComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  {
    path: '**', component: Erro404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
