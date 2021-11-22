import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaboratorioResultadosPage } from './laboratorio-resultados.page';

const routes: Routes = [
  {
    path: '',
    component: LaboratorioResultadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaboratorioResultadosPageRoutingModule {}
