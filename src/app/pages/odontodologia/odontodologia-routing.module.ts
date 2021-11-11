import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OdontodologiaPage } from './odontodologia.page';

const routes: Routes = [
  {
    path: '',
    component: OdontodologiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OdontodologiaPageRoutingModule {}
