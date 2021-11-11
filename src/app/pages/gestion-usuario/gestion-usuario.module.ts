import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { GestionUsuarioPageRoutingModule } from './gestion-usuario-routing.module';

import { GestionUsuarioPage } from './gestion-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionUsuarioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [GestionUsuarioPage]
})
export class GestionUsuarioPageModule {}
