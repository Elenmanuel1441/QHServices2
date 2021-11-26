import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RayosXPageRoutingModule } from './rayos-x-routing.module';

import { RayosXPage } from './rayos-x.page';

import { NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RayosXPageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [RayosXPage]
})
export class RayosXPageModule {}
