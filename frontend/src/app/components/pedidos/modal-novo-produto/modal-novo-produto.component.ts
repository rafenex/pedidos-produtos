import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProdutoPedido } from 'src/app/models/produtoNovo';
import { Produto } from 'src/app/models/produtos';
import { PedidoService } from 'src/app/service/pedido.service';
import { products } from 'src/app/models/produtoNovo';

@Component({
  selector: 'app-modal-novo-produto',
  templateUrl: './modal-novo-produto.component.html',
  styleUrls: ['./modal-novo-produto.component.css'],
})
export class ModalNovoProdutoComponent {
  quantidade!: number;
  preco!: string;
  cor!: string;

  submitted: boolean = false;
  produtos: Produto[] = [];
  selectedProduto!: Produto;
  product: ProdutoPedido = {};

  display: boolean = false;
  messageService: MessageService = new MessageService();
  productDialog: boolean = false;
  verProduto(event: any) {
    console.log(event);
  }
  showDialog() {
    this.display = true;
  }

  constructor(private pedidoService: PedidoService) {}
  getProdutos() {
    this.pedidoService.getProdutos().then((prod: any) => {
      this.produtos = prod;
    });
  }
  saveProduct() {
    this.submitted = true;
    this.product.nome = this.selectedProduto.produto;
    this.product.quantidade = this.quantidade;
    this.product.cor = this.cor;
    this.product.preco = this.preco;

    if (this.product.nome!.trim()) {
      if (this.product.id) {
        products[this.findIndexById(this.product.id) as any] = this.product;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Updated',
          life: 3000,
        });
      } else {
        this.product.id = this.createId();
        products.push(this.product);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Created',
          life: 3000,
        });
      }

      this.display = false;
      this.product = {};
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }
  createId(): string {
    let id = '';
    var chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
  ngOnInit() {
    this.getProdutos();
  }
}
