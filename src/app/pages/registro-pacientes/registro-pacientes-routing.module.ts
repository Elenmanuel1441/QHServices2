import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroPacientesPage } from './registro-pacientes.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroPacientesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroPacientesPageRoutingModule {}
