import { Component } from '@angular/core';
import { Produto } from 'src/app/models/produtos';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css'],
})
export class ListaProdutoComponent {
  produtos: Produto[] = [];
  cols: any[] = [];
  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.produtoService.getCarsSmall().then((produtos) => {
      this.produtos = produtos;
    });
    this.cols = [
      { field: 'referencia', header: 'Referência' },
      { field: 'produto', header: 'Nome' },
      { field: 'categoria', header: 'Categoria' },
      { field: 'preco', header: 'Preço' },
    ];
  }
}
