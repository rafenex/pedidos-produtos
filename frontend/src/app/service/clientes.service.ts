import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor(private http: HttpClient) {}

  data: [] = [];

  async getEstados() {
    return await this.http
      .get(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'
      )
      .toPromise();
  }

  async getCidades(estado: string) {
    return await this.http
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/distritos`
      )
      .toPromise();
  }
}
