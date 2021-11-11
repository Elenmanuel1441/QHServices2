import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SonografiaPage } from './sonografia.page';

const routes: Routes = [
  {
    path: '',
    component: SonografiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SonografiaPageRoutingModule {}
