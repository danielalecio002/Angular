import { Injectable } from '@angular/core';
import { Curso} from './Curso';
@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }
  private vetorCursos:Curso[] = [
    new Curso("Angular", 145,"Desenvolvimento"),
    new Curso("Js", 300, "Desenvolvimento"),
    new Curso("Ilustrator", 150, "Design")
  ];
  public cadastrar(curso:Curso){
    this.vetorCursos.push(curso);
  }
  public listar(){
    return this.vetorCursos;
  }
  public excluir(id:number){
    this.vetorCursos.splice(id,1);
  }
  public alterar(id:number, curso:Curso){
    this.vetorCursos[id] = curso;
  }
}

