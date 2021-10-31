import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RayosXUpdatePageRoutingModule } from './rayos-x-update-routing.module';

import { RayosXUpdatePage } from './rayos-x-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RayosXUpdatePageRoutingModule
  ],
  declarations: [RayosXUpdatePage]
})
export class RayosXUpdatePageModule {}
