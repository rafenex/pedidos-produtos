import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  display!: boolean;
  items!: MenuItem[];
  ngOnInit() {
    this.items = [
      {
        label: 'Pedidos',
        icon: 'pi pi-fw pi-book',
        items: [
          {
            label: 'Pedidos',
            icon: 'pi pi-fw pi-list',
            routerLink: 'lista-pedidos',
          },
          {
            label: 'Novo Pedido',
            icon: 'pi pi-fw pi-plus',
            routerLink: 'novo-pedido',
          },
        ],
      },
      {
        label: 'Produtos',
        icon: 'pi pi-fw pi-shopping-cart',
        items: [
          {
            label: 'Catalogo de Produtos',
            icon: 'pi pi-fw pi-list',
            routerLink: 'lista-produtos',
          },
          {
            label: 'Novo Produto',
            icon: 'pi pi-fw pi-plus',
            routerLink: 'novo-produto',
          },
        ],
      },
      {
        label: 'Clientes',
        icon: 'pi pi-fw pi-users',
        items: [
          {
            label: 'Clientes',
            icon: 'pi pi-fw pi-list',
            routerLink: 'lista-clientes',
          },
          {
            label: 'Novo Cliente',
            icon: 'pi pi-fw pi-user-plus',
            routerLink: 'novo-cliente',
          },
        ],
      },
    ];
  }
}
