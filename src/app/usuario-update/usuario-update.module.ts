import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioUpdatePageRoutingModule } from './usuario-update-routing.module';

import { UsuarioUpdatePage } from './usuario-update.page';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioUpdatePageRoutingModule,
    MatIconModule
  ],
  declarations: [UsuarioUpdatePage]
})
export class UsuarioUpdatePageModule {}
