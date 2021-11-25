import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaboratorioFormularioPage } from './laboratorio-formulario.page';

const routes: Routes = [
  {
    path: '',
    component: LaboratorioFormularioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaboratorioFormularioPageRoutingModule {}
