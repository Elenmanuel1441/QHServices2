import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SonografiaPageRoutingModule } from './sonografia-routing.module';

import { SonografiaPage } from './sonografia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SonografiaPageRoutingModule
  ],
  declarations: [SonografiaPage]
})
export class SonografiaPageModule {}
