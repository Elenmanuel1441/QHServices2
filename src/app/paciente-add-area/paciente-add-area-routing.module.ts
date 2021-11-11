import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacienteAddAreaPage } from './paciente-add-area.page';

const routes: Routes = [
  {
    path: '',
    component: PacienteAddAreaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacienteAddAreaPageRoutingModule {}
