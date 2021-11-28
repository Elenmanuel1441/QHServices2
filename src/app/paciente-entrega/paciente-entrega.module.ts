import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacienteEntregaPageRoutingModule } from './paciente-entrega-routing.module';

import { PacienteEntregaPage } from './paciente-entrega.page';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacienteEntregaPageRoutingModule,
    MatIconModule
  ],
  declarations: [PacienteEntregaPage]
})
export class PacienteEntregaPageModule {}
