export interface ProdutoPedido {
  id?: string;
  nome?: string;
  quantidade?: number;
  preco?: string;
  cor?: string;
}
export const products: ProdutoPedido[] = [
  {
    id: '10',
    nome: 'Caneta',
    quantidade: 100,
    preco: '1.90',
    cor: 'azul',
  },
];
