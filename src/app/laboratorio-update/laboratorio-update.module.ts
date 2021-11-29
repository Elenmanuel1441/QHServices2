import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaboratorioUpdatePageRoutingModule } from './laboratorio-update-routing.module';

import { LaboratorioUpdatePage } from './laboratorio-update.page';
import { DataTablesModule } from 'angular-datatables';
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaboratorioUpdatePageRoutingModule,
    DataTablesModule,
    MatIconModule,
    NgxPaginationModule
  ],
  declarations: [LaboratorioUpdatePage]
})
export class LaboratorioUpdatePageModule {}
