import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioRegistroPageRoutingModule } from './usuario-registro-routing.module';

import { UsuarioRegistroPage } from './usuario-registro.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioRegistroPageRoutingModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
   
  ],
  declarations: [UsuarioRegistroPage]
})
export class UsuarioRegistroPageModule {}
