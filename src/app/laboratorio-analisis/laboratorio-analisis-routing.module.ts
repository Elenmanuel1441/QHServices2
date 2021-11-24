import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaboratorioAnalisisPage } from './laboratorio-analisis.page';

const routes: Routes = [
  {
    path: '',
    component: LaboratorioAnalisisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaboratorioAnalisisPageRoutingModule {}
