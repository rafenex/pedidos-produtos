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
  produtosAdicionados: ProdutoPedido[] = [];
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
    frete: new FormControl('', [Validators.required]),
  });

  get total() {
    let tot = 0;
    this.products.forEach((p) => {
      tot = p.preco! * p.quantidade! + tot;
      this.produtosAdicionados.push(p);
    });

    return tot + Number(this.formNovoPedido.value.frete);
  }
  get form(): any {
    return this.formNovoPedido.controls;
  }
  onSubmit(): void {
    let obj = {
      cliente: this.formNovoPedido.value.cliente,
      produtos: this.products,
      frete: this.formNovoPedido.value.frete,
      observacoes: this.formNovoPedido.value.observacoes,
      pagamento: this.outroPagamento
        ? this.outroPagamento
        : this.formNovoPedido.value.pagamento,
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
  }
}
