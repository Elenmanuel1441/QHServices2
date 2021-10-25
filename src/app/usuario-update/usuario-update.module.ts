import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioUpdatePageRoutingModule } from './usuario-update-routing.module';

import { UsuarioUpdatePage } from './usuario-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioUpdatePageRoutingModule
  ],
  declarations: [UsuarioUpdatePage]
})
export class UsuarioUpdatePageModule {}
