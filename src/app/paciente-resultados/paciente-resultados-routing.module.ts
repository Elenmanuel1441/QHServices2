import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacienteResultadosPage } from './paciente-resultados.page';

const routes: Routes = [
  {
    path: '',
    component: PacienteResultadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacienteResultadosPageRoutingModule {}
