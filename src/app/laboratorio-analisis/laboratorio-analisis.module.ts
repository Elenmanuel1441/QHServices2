import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaboratorioAnalisisPageRoutingModule } from './laboratorio-analisis-routing.module';

import { LaboratorioAnalisisPage } from './laboratorio-analisis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaboratorioAnalisisPageRoutingModule
  ],
  declarations: [LaboratorioAnalisisPage]
})
export class LaboratorioAnalisisPageModule {}
