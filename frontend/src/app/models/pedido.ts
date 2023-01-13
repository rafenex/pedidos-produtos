import { Cliente } from './clientes';
import { Produto } from './produtos';

export interface Pedido {
  cliente: Cliente;
  produto: Produto;
  data: string;
  pagamento: string;
  data_entrega: string;
  status: string;
}
