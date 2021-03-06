import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RayosXUpdatePageRoutingModule } from './rayos-x-update-routing.module';

import { RayosXUpdatePage } from './rayos-x-update.page';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RayosXUpdatePageRoutingModule,
    MatIconModule
  ],
  declarations: [RayosXUpdatePage]
})
export class RayosXUpdatePageModule {}
