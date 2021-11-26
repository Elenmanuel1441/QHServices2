import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacienteEntregaPage } from './paciente-entrega.page';

const routes: Routes = [
  {
    path: '',
    component: PacienteEntregaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacienteEntregaPageRoutingModule {}
