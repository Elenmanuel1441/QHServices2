import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacienteUpdatePageRoutingModule } from './paciente-update-routing.module';

import { PacienteUpdatePage } from './paciente-update.page';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacienteUpdatePageRoutingModule,
    MatIconModule
  ],
  declarations: [PacienteUpdatePage]
})
export class PacienteUpdatePageModule {}
