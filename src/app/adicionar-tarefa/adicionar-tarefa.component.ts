import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { Tarefa } from '../tarefa';

@Component({
  selector: 'app-adicionar-tarefa',
  templateUrl: './adicionar-tarefa.component.html',
  styleUrls: ['./adicionar-tarefa.component.css']
})
export class AdicionarTarefaComponent {
  novaTarefa: Tarefa = new Tarefa()

  constructor(private ts: CrudService){}

  adicionarTarefa(){
    this.ts.adicionarTarefa(this.novaTarefa).subscribe(
      resposta =>{
        console.log('Tarefa adicionada com sucesso', resposta)
        this.novaTarefa = new Tarefa();
      }, 
      erro => {
        console.log('Error ao adicionar tarefa', erro)
      }
    )
  }
}
