import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacienteUpdatePageRoutingModule } from './paciente-update-routing.module';

import { PacienteUpdatePage } from './paciente-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacienteUpdatePageRoutingModule
  ],
  declarations: [PacienteUpdatePage]
})
export class PacienteUpdatePageModule {}
