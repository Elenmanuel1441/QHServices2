import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OdontologiaUpdatePage } from './odontologia-update.page';

const routes: Routes = [
  {
    path: '',
    component: OdontologiaUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OdontologiaUpdatePageRoutingModule {}
