import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacienteRegistroPage } from './paciente-registro.page';

const routes: Routes = [
  {
    path: '',
    component: PacienteRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacienteRegistroPageRoutingModule {}
