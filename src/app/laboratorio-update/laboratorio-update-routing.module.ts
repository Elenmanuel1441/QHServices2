import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaboratorioUpdatePage } from './laboratorio-update.page';

const routes: Routes = [
  {
    path: '',
    component: LaboratorioUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaboratorioUpdatePageRoutingModule {}
