import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateUsuarioPageRoutingModule } from './update-usuario-routing.module';

import { UpdateUsuarioPage } from './update-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateUsuarioPageRoutingModule
  ],
  declarations: [UpdateUsuarioPage]
})
export class UpdateUsuarioPageModule {}
