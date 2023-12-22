import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { Tarefa } from '../tarefa';

@Component({
  selector: 'app-exibir-tarefa',
  templateUrl: './exibir-tarefa.component.html',
  styleUrls: ['./exibir-tarefa.component.css']
})
export class ExibirTarefaComponent {
  tarefas: Tarefa[] = []
  constructor(private ts: CrudService) {
    this.ts.obterTarefas().subscribe(
      res => {
        this.tarefas = res.resultado
      }
    )
  }
  excluirTarefa(id: number) {
    const confirmacao = window.confirm('Tem certeza que deseja excluir esta tarefa?');
    if (confirmacao) {
      this.ts.excluirTarefa(id).subscribe(
        resposta => {
          window.alert(`Tarefa ${id} excluída com sucesso`);
          this.atualizarListaTarefa();
        }, erro => {
          console.error(`Erro ao excluir tarefa ${id}`, erro);
        }
      )
    } else{window.alert('Exclusão cancelada')}
  } 
  
  atualizarListaTarefa(){
    this.ts.obterTarefas().subscribe(
      res => {
        this.tarefas = res.resultado
      }
    )
  }
}


