import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CardModule } from 'primeng/card';
import { ListaProdutoComponent } from './components/produtos/lista-produto/lista-produto.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { NovoProdutoComponent } from './components/produtos/novo-produto/novo-produto.component';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { NovoClienteComponent } from './components/clientes/novo-cliente/novo-cliente.component';
import {
  NgxMaskDirective,
  NgxMaskPipe,
  provideEnvironmentNgxMask,
} from 'ngx-mask';
import { IConfig } from 'ngx-mask';
import { ListaClientesComponent } from './components/clientes/lista-clientes/lista-clientes.component';
import { NovoPedidoComponent } from './components/pedidos/novo-pedido/novo-pedido.component';
import { ListaPedidosComponent } from './components/pedidos/lista-pedidos/lista-pedidos.component';
import { DialogModule } from 'primeng/dialog';
import { ModalNovoProdutoComponent } from './components/pedidos/modal-novo-produto/modal-novo-produto.component';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

const maskConfig: Partial<IConfig> = {
  validation: false,
};
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListaProdutoComponent,
    NovoProdutoComponent,
    NovoClienteComponent,
    ListaClientesComponent,
    NovoPedidoComponent,
    ListaPedidosComponent,
    ModalNovoProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    SidebarModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    CardModule,
    TableModule,
    HttpClientModule,
    DropdownModule,
    FieldsetModule,
    NgxMaskDirective,
    NgxMaskPipe,
    DialogModule,
    ConfirmDialogModule,
  ],
  providers: [
    provideEnvironmentNgxMask(maskConfig),
    ConfirmationService,
    MessageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
