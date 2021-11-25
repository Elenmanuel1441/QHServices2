import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaboratorioFormularioPageRoutingModule } from './laboratorio-formulario-routing.module';

import { LaboratorioFormularioPage } from './laboratorio-formulario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaboratorioFormularioPageRoutingModule
  ],
  declarations: [LaboratorioFormularioPage]
})
export class LaboratorioFormularioPageModule {}
