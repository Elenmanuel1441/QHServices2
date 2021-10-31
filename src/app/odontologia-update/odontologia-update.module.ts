import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OdontologiaUpdatePageRoutingModule } from './odontologia-update-routing.module';

import { OdontologiaUpdatePage } from './odontologia-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OdontologiaUpdatePageRoutingModule
  ],
  declarations: [OdontologiaUpdatePage]
})
export class OdontologiaUpdatePageModule {}
