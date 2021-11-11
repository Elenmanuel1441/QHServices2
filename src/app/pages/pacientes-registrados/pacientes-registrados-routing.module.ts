import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacientesRegistradosPage } from './pacientes-registrados.page';

const routes: Routes = [
  {
    path: '',
    component: PacientesRegistradosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacientesRegistradosPageRoutingModule {}
