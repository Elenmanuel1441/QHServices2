import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacienteRegistroPageRoutingModule } from './paciente-registro-routing.module';

import { PacienteRegistroPage } from './paciente-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacienteRegistroPageRoutingModule
  ],
  declarations: [PacienteRegistroPage]
})
export class PacienteRegistroPageModule {}
