import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarTarefaComponent } from './adicionar-tarefa/adicionar-tarefa.component';
import { ExibirTarefaComponent } from './exibir-tarefa/exibir-tarefa.component';

const routes: Routes = [
  { path: 'adicionar', component: AdicionarTarefaComponent},
  { path: 'exibir', component: ExibirTarefaComponent},
  { path: '', redirectTo: '/adicionar', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
