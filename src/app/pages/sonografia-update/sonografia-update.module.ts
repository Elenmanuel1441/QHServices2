import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SonografiaUpdatePageRoutingModule } from './sonografia-update-routing.module';

import { SonografiaUpdatePage } from './sonografia-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SonografiaUpdatePageRoutingModule
  ],
  declarations: [SonografiaUpdatePage]
})
export class SonografiaUpdatePageModule {}
