import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacienteAddAreaPageRoutingModule } from './paciente-add-area-routing.module';

import { PacienteAddAreaPage } from './paciente-add-area.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacienteAddAreaPageRoutingModule
  ],
  declarations: [PacienteAddAreaPage]
})
export class PacienteAddAreaPageModule {}
