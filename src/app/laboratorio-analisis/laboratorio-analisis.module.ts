import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaboratorioAnalisisPageRoutingModule } from './laboratorio-analisis-routing.module';

import { LaboratorioAnalisisPage } from './laboratorio-analisis.page';
import { NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaboratorioAnalisisPageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [LaboratorioAnalisisPage]
})
export class LaboratorioAnalisisPageModule {}
