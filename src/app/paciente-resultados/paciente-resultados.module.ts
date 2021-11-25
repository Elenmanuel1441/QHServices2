import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacienteResultadosPageRoutingModule } from './paciente-resultados-routing.module';

import { PacienteResultadosPage } from './paciente-resultados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacienteResultadosPageRoutingModule
  ],
  declarations: [PacienteResultadosPage]
})
export class PacienteResultadosPageModule {}
