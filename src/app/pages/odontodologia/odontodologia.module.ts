import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OdontodologiaPageRoutingModule } from './odontodologia-routing.module';

import { OdontodologiaPage } from './odontodologia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OdontodologiaPageRoutingModule
  ],
  declarations: [OdontodologiaPage]
})
export class OdontodologiaPageModule {}
