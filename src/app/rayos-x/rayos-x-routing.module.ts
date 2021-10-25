import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RayosXPage } from './rayos-x.page';

const routes: Routes = [
  {
    path: '',
    component: RayosXPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RayosXPageRoutingModule {}
