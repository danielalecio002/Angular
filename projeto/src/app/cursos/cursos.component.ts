import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';

import { Curso } from './Curso';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  public vetorCursos:Curso[] = [new Curso("",0,"")];
  public curso:Curso = new Curso("",0,"");
  public id:number = 0;  
  
  constructor(private servico:CursosService) { 

  }

  ngOnInit(): void {
  this.id = -1;  
  this.vetorCursos = this.servico.listar();
  }
  cadastrar(){
    this.servico.cadastrar(this.curso);
    this.curso = new Curso("",0,"");
  }
  excluir(id:number){
    this.servico.excluir(id);
    this.id = -1;
  }
  alterar(id:number){
    this.id = id;
    this.curso = new Curso(
      this.vetorCursos[id].nomeCurso,
      this.vetorCursos[id].valorCurso,
      this.vetorCursos[id].areaCurso
    )    
  }
  atualizar(){
    this.servico.alterar(this.id,this.curso);
    this.curso = new Curso("",0,"");
    this.id = -1;
  }

  
}
