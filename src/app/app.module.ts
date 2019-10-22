import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaClassificacaoComponent } from './tabela-classificacao/tabela-classificacao.component';
import {AlunosService} from './alunos.service';
import {TrabalhosService} from './trabalhos.service';
import {FrequenciasService} from './frequencias.service';
import { ListaMissoesComponent } from './lista-missoes/lista-missoes.component';
import { HomeComponent } from './home/home.component';
import { Erro404Component } from './erro404/erro404.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AboutComponent } from './about/about.component';
import {NgSrcModule} from 'ng-src';

@NgModule({
  declarations: [
    AppComponent,
    TabelaClassificacaoComponent,
    ListaMissoesComponent,
    HomeComponent,
    Erro404Component,
    PerfilComponent,
    AboutComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgSrcModule,
    AppRoutingModule
  ],
  providers: [AlunosService, TrabalhosService, FrequenciasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
