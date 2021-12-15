import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SonografiaUpdatePageRoutingModule } from './sonografia-update-routing.module';

import { SonografiaUpdatePage } from './sonografia-update.page';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SonografiaUpdatePageRoutingModule,
    MatIconModule
  ],
  declarations: [SonografiaUpdatePage]
})
export class SonografiaUpdatePageModule {}
