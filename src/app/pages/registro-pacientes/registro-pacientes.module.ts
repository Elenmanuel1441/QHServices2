import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { RegistroPacientesPageRoutingModule } from './registro-pacientes-routing.module';

import { RegistroPacientesPage } from './registro-pacientes.page';

import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPacientesPageRoutingModule,
    MatDividerModule,
    ReactiveFormsModule
  ],
  declarations: [RegistroPacientesPage]
})
export class RegistroPacientesPageModule {}
