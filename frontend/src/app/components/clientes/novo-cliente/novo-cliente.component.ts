import { Component } from '@angular/core';

import { ClienteService } from 'src/app/service/clientes.service';

@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.component.html',
  styleUrls: ['./novo-cliente.component.css'],
})
export class NovoClienteComponent {
  cidades: [] = [];
  estados: [] = [];
  cpf_cnpj: '' = '';
  selectedEstado: '' = '';
  selectedCidade: '' = '';
  constructor(private clienteService: ClienteService) {}
  getCidades(event: string) {
    this.clienteService.getCidades(event).then((cid: any) => {
      this.cidades = cid;
    });
  }

  isCPF(): boolean {
    return this.cpf_cnpj == null
      ? true
      : this.cpf_cnpj.length < 12
      ? true
      : false;
  }

  getCpfCnpjMask(): string {
    return this.isCPF() ? '000.000.000-009' : '00.000.000/0000-00';
  }
  ngOnInit() {
    this.clienteService.getEstados().then((es: any) => {
      this.estados = es;
    });
  }
}
