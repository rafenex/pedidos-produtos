import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovoClienteComponent } from './components/clientes/novo-cliente/novo-cliente.component';

import { ListaProdutoComponent } from './components/produtos/lista-produto/lista-produto.component';
import { NovoProdutoComponent } from './components/produtos/novo-produto/novo-produto.component';

const routes: Routes = [
  { path: '', component: ListaProdutoComponent },
  { path: 'lista-produtos', component: ListaProdutoComponent },
  { path: 'novo-produto', component: NovoProdutoComponent },
  { path: 'novo-cliente', component: NovoClienteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
