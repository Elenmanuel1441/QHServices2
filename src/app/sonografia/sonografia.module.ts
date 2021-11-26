import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SonografiaPageRoutingModule } from './sonografia-routing.module';

import { SonografiaPage } from './sonografia.page';
import { NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SonografiaPageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [SonografiaPage]
})
export class SonografiaPageModule {}
