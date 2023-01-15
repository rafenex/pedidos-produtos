import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/clientes';
import { ProdutoPedido } from '../models/produtoNovo';
import { Produto } from '../models/produtos';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  constructor(private http: HttpClient) {}

  async getProdutos() {
    return await this.http
      .get('assets/produtosApi.json')
      .toPromise()
      .then((res: any) => <Produto[]>res.data);
  }

  async getClientes() {
    return await this.http
      .get('assets/clienteApi.json')
      .toPromise()
      .then((res: any) => <Cliente[]>res.data);
  }

  async getProdutosPedido() {
    return await this.http
      .get('assets/produtoPedio.json')
      .toPromise()
      .then((res: any) => <ProdutoPedido[]>res.data);
  }

  async setProdutosPedido(produto: ProdutoPedido) {
    return await this.http
      .post('assets/produtoPedio.json', produto)
      .toPromise()
      .then((res: any) => console.log(res.data));
  }
}
