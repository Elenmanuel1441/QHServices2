import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacientesAddAreaPage } from './pacientes-add-area.page';

const routes: Routes = [
  {
    path: '',
    component: PacientesAddAreaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacientesAddAreaPageRoutingModule {}
