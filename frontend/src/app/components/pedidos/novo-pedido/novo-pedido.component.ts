import { Component } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Cliente } from 'src/app/models/clientes';
import { ProdutoPedido } from 'src/app/models/produtoNovo';
import { PedidoService } from 'src/app/service/pedido.service';
import { products } from 'src/app/models/produtoNovo';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-novo-pedido',
  templateUrl: './novo-pedido.component.html',
  styleUrls: ['./novo-pedido.component.css'],
})
export class NovoPedidoComponent {
  total = 0;
  entrega!: Date;
  clientes: Cliente[] = [];
  productDialog: boolean = false;
  product: ProdutoPedido = {};
  products: ProdutoPedido[] = [];
  selectedProducts: ProdutoPedido[] = [];
  selectedCliente!: Cliente;
  outroPagamento = '';
  constructor(
    private pedidoService: PedidoService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}
  formNovoPedido = new FormGroup({
    pagamento: new FormControl('', [Validators.required]),
    cliente: new FormControl('', [Validators.required]),
    data_entrega: new FormControl('', [Validators.required]),
    observacoes: new FormControl(''),
  });

  get form(): any {
    return this.formNovoPedido.controls;
  }
  onSubmit(): void {
    let obj = {
      cliente: this.formNovoPedido.value.cliente,
      produtos: this.products,
      data_entrega: new Date(
        this.formNovoPedido.value.data_entrega!
      ).toLocaleDateString('pt-BR'),
    };
    console.log(obj);
  }
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
    this.calcularTotal();
  }

  calcularTotal() {
    let total = 0;
    for (let p of this.products) {
      total += p.preco!;
    }

    this.total = total;
  }
}
