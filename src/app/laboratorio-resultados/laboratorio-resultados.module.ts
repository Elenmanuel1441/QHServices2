import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaboratorioResultadosPageRoutingModule } from './laboratorio-resultados-routing.module';

import { LaboratorioResultadosPage } from './laboratorio-resultados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaboratorioResultadosPageRoutingModule
  ],
  declarations: [LaboratorioResultadosPage]
})
export class LaboratorioResultadosPageModule {}
