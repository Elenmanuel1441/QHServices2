import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColaLaboratorioPage } from './cola-laboratorio.page';

const routes: Routes = [
  {
    path: '',
    component: ColaLaboratorioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColaLaboratorioPageRoutingModule {}
