import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioRegistroPageRoutingModule } from './usuario-registro-routing.module';

import { UsuarioRegistroPage } from './usuario-registro.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule} from 'ngx-order-pipe';
import { NgxPaginationModule} from 'ngx-pagination';
import { DataTablesModule } from 'angular-datatables';






@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioRegistroPageRoutingModule,
    Ng2SearchPipeModule,
    DataTablesModule,
    NgxPaginationModule,
    OrderModule
 
   
  ],
  declarations: [UsuarioRegistroPage]
})
export class UsuarioRegistroPageModule {}
