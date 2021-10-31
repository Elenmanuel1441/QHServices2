import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaboratorioUpdatePageRoutingModule } from './laboratorio-update-routing.module';

import { LaboratorioUpdatePage } from './laboratorio-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaboratorioUpdatePageRoutingModule
  ],
  declarations: [LaboratorioUpdatePage]
})
export class LaboratorioUpdatePageModule {}
