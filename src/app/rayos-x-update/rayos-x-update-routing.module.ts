import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RayosXUpdatePage } from './rayos-x-update.page';

const routes: Routes = [
  {
    path: '',
    component: RayosXUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RayosXUpdatePageRoutingModule {}
