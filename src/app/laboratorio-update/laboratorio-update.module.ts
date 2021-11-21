import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaboratorioUpdatePageRoutingModule } from './laboratorio-update-routing.module';

import { LaboratorioUpdatePage } from './laboratorio-update.page';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaboratorioUpdatePageRoutingModule,
    DataTablesModule
  ],
  declarations: [LaboratorioUpdatePage]
})
export class LaboratorioUpdatePageModule {}
