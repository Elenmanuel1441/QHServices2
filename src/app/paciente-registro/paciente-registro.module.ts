import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacienteRegistroPageRoutingModule } from './paciente-registro-routing.module';

import { PacienteRegistroPage } from './paciente-registro.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacienteRegistroPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [PacienteRegistroPage]
})
export class PacienteRegistroPageModule {}
