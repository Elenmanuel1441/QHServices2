import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaboratorioResultadosPageRoutingModule } from './laboratorio-resultados-routing.module';

import { LaboratorioResultadosPage } from './laboratorio-resultados.page';
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaboratorioResultadosPageRoutingModule,
    MatIconModule,
    NgxPaginationModule
  ],
  declarations: [LaboratorioResultadosPage]
})
export class LaboratorioResultadosPageModule {}
