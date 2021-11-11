import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OdontodologiaUpdatePageRoutingModule } from './odontodologia-update-routing.module';

import { OdontodologiaUpdatePage } from './odontodologia-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OdontodologiaUpdatePageRoutingModule
  ],
  declarations: [OdontodologiaUpdatePage]
})
export class OdontodologiaUpdatePageModule {}
