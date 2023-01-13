import { Component } from '@angular/core';
import { Categoria } from 'src/app/models/produtos';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css'],
})
export class NovoProdutoComponent {
  categorias: Categoria[] = [];
  selectedCategoria: Categoria = { name: '', code: '' };
  constructor() {
    this.categorias = [
      { name: 'Canetas', code: 'NY' },
      { name: 'Chaveiros', code: 'RM' },
      { name: 'Calendários', code: 'LDN' },
      { name: 'Agendas', code: 'IST' },
      { name: 'Carteirinhas', code: 'PRS' },
    ];
  }
}
