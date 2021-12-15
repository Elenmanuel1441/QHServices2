import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaboratorioPageRoutingModule } from './laboratorio-routing.module';

import { LaboratorioPage } from './laboratorio.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule} from 'ngx-order-pipe';
import { NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaboratorioPageRoutingModule,
    Ng2SearchPipeModule,
    OrderModule,
    NgxPaginationModule

  ],
  declarations: [LaboratorioPage]
})
export class LaboratorioPageModule {}
