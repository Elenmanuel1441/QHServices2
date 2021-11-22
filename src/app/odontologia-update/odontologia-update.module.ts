import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OdontologiaUpdatePageRoutingModule } from './odontologia-update-routing.module';

import { OdontologiaUpdatePage } from './odontologia-update.page';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OdontologiaUpdatePageRoutingModule,
    MatIconModule
  ],
  declarations: [OdontologiaUpdatePage]
})
export class OdontologiaUpdatePageModule {}
