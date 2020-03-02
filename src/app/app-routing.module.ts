import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarMensagemComponent } from './editar-mensagem/editar-mensagem.component';
import { PainelComponent } from './painel/painel.component';



const routes: Routes = [
  { path: '', redirectTo: 'painel', pathMatch:'full'},
  { path: 'painel', component: PainelComponent },
  { path: 'editar-mensagem', component: EditarMensagemComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
