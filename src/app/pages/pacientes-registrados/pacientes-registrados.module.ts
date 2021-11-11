import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacientesRegistradosPageRoutingModule } from './pacientes-registrados-routing.module';

import { PacientesRegistradosPage } from './pacientes-registrados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacientesRegistradosPageRoutingModule
  ],
  declarations: [PacientesRegistradosPage]
})
export class PacientesRegistradosPageModule {}
