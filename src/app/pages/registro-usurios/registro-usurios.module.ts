import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroUsuriosPageRoutingModule } from './registro-usurios-routing.module';

import { RegistroUsuriosPage } from './registro-usurios.page';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroUsuriosPageRoutingModule,
    MatDividerModule
  ],
  declarations: [RegistroUsuriosPage]
})
export class RegistroUsuriosPageModule {}
