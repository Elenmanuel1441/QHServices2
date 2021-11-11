import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacientesAddAreaPageRoutingModule } from './pacientes-add-area-routing.module';

import { PacientesAddAreaPage } from './pacientes-add-area.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacientesAddAreaPageRoutingModule
  ],
  declarations: [PacientesAddAreaPage]
})
export class PacientesAddAreaPageModule {}
