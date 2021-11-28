import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaboratorioFormularioPageRoutingModule } from './laboratorio-formulario-routing.module';

import { LaboratorioFormularioPage } from './laboratorio-formulario.page';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaboratorioFormularioPageRoutingModule,
    MatIconModule
  ],
  declarations: [LaboratorioFormularioPage]
})
export class LaboratorioFormularioPageModule {}
