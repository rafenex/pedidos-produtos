import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/clientes';
import { Produto } from 'src/app/models/produtos';
import { PedidoService } from 'src/app/service/pedido.service';

@Component({
  selector: 'app-novo-pedido',
  templateUrl: './novo-pedido.component.html',
  styleUrls: ['./novo-pedido.component.css'],
})
export class NovoPedidoComponent {
  clientes: Cliente[] = [];
  produtos: Produto[] = [];
  selectedCliente!: Cliente;
  constructor(private pedidoService: PedidoService) {}
  verCliente(event: any) {
    console.log(event);
  }
  verProduto(event: any) {
    console.log(event);
  }

  getClientes() {
    this.pedidoService.getClientes().then((cli: any) => {
      this.clientes = cli;
      console.log(this.clientes);
    });
  }

  getProdutos() {
    this.pedidoService.getProdutos().then((prod: any) => {
      this.produtos = prod;
      console.log(this.produtos);
    });
  }

  ngOnInit() {
    this.getClientes();
    this.getProdutos();
  }
}
