import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pages404Page } from './pages404.page';

const routes: Routes = [
  {
    path: '',
    component: Pages404Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pages404PageRoutingModule {}
