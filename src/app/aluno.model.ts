export class Aluno {
  id: number;
  nome: string;
  frequenciaTotal: string;
  listaTrofeis: string;
  listaTrabalhos: string;

  constructor(id: number, nome: string, frequencias: string , trofeis: string, trabalhos: string) {
    this.id = id;
    this.nome = nome;
    this.frequenciaTotal = frequencias;
    this.listaTrofeis = trofeis;
    this.listaTrabalhos = trabalhos;
  }
}
