import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioRegistroPageRoutingModule } from './usuario-registro-routing.module';

import { UsuarioRegistroPage } from './usuario-registro.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioRegistroPageRoutingModule,
    Ng2SearchPipeModule,
    DataTablesModule
  ],
  declarations: [UsuarioRegistroPage]
})
export class UsuarioRegistroPageModule {}
