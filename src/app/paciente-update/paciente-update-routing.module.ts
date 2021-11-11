import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacienteUpdatePage } from './paciente-update.page';

const routes: Routes = [
  {
    path: '',
    component: PacienteUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacienteUpdatePageRoutingModule {}
