import {Trofeu} from './trofeu.model';

export class Aluno {
  constructor(public id: number, public posicao, public nome: string, public media: number, public trofeis: Trofeu) {
  }
}
