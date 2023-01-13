import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClientesComponent } from './components/clientes/lista-clientes/lista-clientes.component';
import { NovoClienteComponent } from './components/clientes/novo-cliente/novo-cliente.component';
import { ListaPedidosComponent } from './components/pedidos/lista-pedidos/lista-pedidos.component';
import { NovoPedidoComponent } from './components/pedidos/novo-pedido/novo-pedido.component';

import { ListaProdutoComponent } from './components/produtos/lista-produto/lista-produto.component';
import { NovoProdutoComponent } from './components/produtos/novo-produto/novo-produto.component';

const routes: Routes = [
  { path: '', component: ListaProdutoComponent },
  { path: 'lista-produtos', component: ListaProdutoComponent },
  { path: 'novo-produto', component: NovoProdutoComponent },
  { path: 'novo-cliente', component: NovoClienteComponent },
  { path: 'lista-clientes', component: ListaClientesComponent },
  { path: 'novo-pedido', component: NovoPedidoComponent },
  { path: 'lista-pedidos', component: ListaPedidosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
