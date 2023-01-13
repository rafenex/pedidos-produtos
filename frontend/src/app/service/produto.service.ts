import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from 'src/app/models/produtos';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private http: HttpClient) {}

  data: Produto[] = [];

  async getCarsSmall() {
    return await this.http
      .get('assets/produtosApi.json')
      .toPromise()
      .then((res: any) => <Produto[]>res.data);
  }
}
