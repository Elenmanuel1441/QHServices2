import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroUsuriosPage } from './registro-usurios.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroUsuriosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroUsuriosPageRoutingModule {}
