import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pages404PageRoutingModule } from './pages404-routing.module';

import { Pages404Page } from './pages404.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pages404PageRoutingModule
  ],
  declarations: [Pages404Page]
})
export class Pages404PageModule {}
