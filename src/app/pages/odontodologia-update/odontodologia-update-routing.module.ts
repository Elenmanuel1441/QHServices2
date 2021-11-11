import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OdontodologiaUpdatePage } from './odontodologia-update.page';

const routes: Routes = [
  {
    path: '',
    component: OdontodologiaUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OdontodologiaUpdatePageRoutingModule {}
