import { Component } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Cliente } from 'src/app/models/clientes';
import { ProdutoPedido } from 'src/app/models/produtoNovo';
import { PedidoService } from 'src/app/service/pedido.service';
import { products } from 'src/app/models/produtoNovo';
@Component({
  selector: 'app-novo-pedido',
  templateUrl: './novo-pedido.component.html',
  styleUrls: ['./novo-pedido.component.css'],
})
export class NovoPedidoComponent {
  entrega!: Date;
  clientes: Cliente[] = [];
  productDialog: boolean = false;
  product: ProdutoPedido = {};
  products: ProdutoPedido[] = [];
  selectedProducts: ProdutoPedido[] = [];
  selectedCliente!: Cliente;

  constructor(
    private pedidoService: PedidoService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  getClientes() {
    this.pedidoService.getClientes().then((cli: any) => {
      this.clientes = cli;
    });
  }

  editProduct(product: ProdutoPedido) {
    this.product = { ...product };
    this.productDialog = true;
  }

  deleteProduct(product: ProdutoPedido) {
    this.confirmationService.confirm({
      message: 'Deseja remover ' + product.nome + ' da lista?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter((val) => val.id !== product.id);
        this.product = {};
        this.messageService.add({
          severity: 'success',
          summary: 'DELETADO',
          detail: 'Produto apagado',
          life: 3000,
        });
      },
    });
  }

  ngOnInit() {
    this.getClientes();
    this.products = products;
  }
}
