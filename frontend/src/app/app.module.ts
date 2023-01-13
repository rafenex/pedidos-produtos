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
  ],
  providers: [provideEnvironmentNgxMask(maskConfig)],
  bootstrap: [AppComponent],
})
export class AppModule {}
