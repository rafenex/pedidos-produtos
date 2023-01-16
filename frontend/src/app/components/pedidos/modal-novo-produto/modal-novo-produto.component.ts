import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProdutoPedido } from 'src/app/models/produtoNovo';
import { Produto } from 'src/app/models/produtos';
import { PedidoService } from 'src/app/service/pedido.service';
import { products } from 'src/app/models/produtoNovo';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-novo-produto',
  templateUrl: './modal-novo-produto.component.html',
  styleUrls: ['./modal-novo-produto.component.css'],
})
export class ModalNovoProdutoComponent {
  submitted: boolean = false;
  produtos: Produto[] = [];
  selectedProduto!: Produto;
  product: ProdutoPedido = {};

  display: boolean = false;

  productDialog: boolean = false;

  showDialog() {
    this.display = true;
  }

  constructor(
    private pedidoService: PedidoService,
    private messageService: MessageService
  ) {}
  getProdutos() {
    this.pedidoService.getProdutos().then((prod: any) => {
      this.produtos = prod;
    });
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

  formProdutosPedido = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    cor: new FormControl('', [Validators.required]),
    preco: new FormControl('', [Validators.required]),
    quantidade: new FormControl('', [Validators.required]),
  });

  get form(): any {
    return this.formProdutosPedido.controls;
  }

  onSubmit(): void {
    let obj: ProdutoPedido = {
      id: undefined,
      nome: this.formProdutosPedido.value.nome!,
      cor: this.formProdutosPedido.value.cor!,
      preco: this.formProdutosPedido.value.preco!,
      quantidade: Number(this.formProdutosPedido.value.quantidade!),
    };
    if (obj.nome!.trim()) {
      if (this.product.id) {
        products[this.findIndexById(obj.id!) as any] = this.product;
        this.messageService.add({
          severity: 'success',
          summary: 'ADICIONADO',
          detail: 'Produto adicionado',
          life: 3000,
        });
      } else {
        products.push(obj);
        this.messageService.add({
          severity: 'success',
          summary: 'ADICIONADO',
          detail: 'Produto adicionado',
          life: 3000,
        });
      }
      this.formProdutosPedido.reset();
      this.display = false;
    }
  }

  ngOnInit() {
    this.getProdutos();
  }
}
