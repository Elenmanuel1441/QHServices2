import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacienteResultadosPageRoutingModule } from './paciente-resultados-routing.module';

import { PacienteResultadosPage } from './paciente-resultados.page';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacienteResultadosPageRoutingModule,
    MatIconModule
  ],
  declarations: [PacienteResultadosPage]
})
export class PacienteResultadosPageModule {}
