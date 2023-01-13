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
            label: 'Left',
            icon: 'pi pi-fw pi-align-left',
          },
          {
            label: 'Right',
            icon: 'pi pi-fw pi-align-right',
          },
          {
            label: 'Center',
            icon: 'pi pi-fw pi-align-center',
          },
          {
            label: 'Justify',
            icon: 'pi pi-fw pi-align-justify',
          },
        ],
      },
      {
        label: 'Produtos',
        icon: 'pi pi-fw pi-shopping-cart',
        items: [
          {
            label: 'Catalogo de Produtos',
            icon: 'pi pi-fw pi-align-right',
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
            icon: 'pi pi-fw pi-align-left',
            routerLink: 'lista-clientes',
          },
          {
            label: 'Novo Cliente',
            icon: 'pi pi-fw pi-user-plus',
            routerLink: 'novo-cliente',
          },
          {
            label: 'Center',
            icon: 'pi pi-fw pi-align-center',
          },
          {
            label: 'Justify',
            icon: 'pi pi-fw pi-align-justify',
          },
        ],
      },
    ];
  }
}
