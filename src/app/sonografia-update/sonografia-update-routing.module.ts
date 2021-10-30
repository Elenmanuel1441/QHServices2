import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SonografiaUpdatePage } from './sonografia-update.page';

const routes: Routes = [
  {
    path: '',
    component: SonografiaUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SonografiaUpdatePageRoutingModule {}
