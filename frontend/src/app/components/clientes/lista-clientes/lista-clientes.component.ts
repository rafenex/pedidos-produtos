import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/clientes';
import { ClienteService } from 'src/app/service/clientes.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css'],
})
export class ListaClientesComponent {
  clientes: Cliente[] = [];
  cols: any[] = [];
  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    this.clienteService.getClientes().then((cliente) => {
      this.clientes = cliente;
    });

    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'cpf_cnpj', header: 'CPF/CNPJ' },
      { field: 'telefone', header: 'Telefone' },
      { field: 'endereco', header: 'Endereço' },
    ];
  }
}
