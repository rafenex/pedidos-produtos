import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/clientes';
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
}
