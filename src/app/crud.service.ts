import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from './tarefa';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API_URL = 'http://localhost:3000'
  constructor(private http: HttpClient) {

  }

  obterTarefas(): Observable<any> {
    return this.http.get(`${this.API_URL}/tarefas`)
  }

  adicionarTarefa(novaTarefa: Tarefa): Observable<any> {
    return this.http.post(`${this.API_URL}/adicionar`, novaTarefa)
  }

  excluirTarefa(id_tarefa: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/excluir/${id_tarefa}`);
  }

}

