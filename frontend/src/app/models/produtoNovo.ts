export interface ProdutoPedido {
  id?: string;
  nome?: string;
  quantidade?: number;
  preco?: number;
  cor?: string;
}
export const products: ProdutoPedido[] = [
  {
    id: '10',
    nome: 'Caneta',
    quantidade: 100,
    preco: 1.9,
    cor: 'azul',
  },
];
