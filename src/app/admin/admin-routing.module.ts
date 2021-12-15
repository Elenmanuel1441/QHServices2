import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch:'full'},
      { path: 'dashboard', loadChildren:() => import ('../dashboard/dashboard.module').then(m => m.DashboardPageModule)},
      { path: 'rayos-x', loadChildren:() => import ('../rayos-x/rayos-x.module').then(m => m.RayosXPageModule)},
      { path: 'odontologia', loadChildren: () => import ('../odontologia/odontologia.module').then(m => m.OdontologiaPageModule)},
      { path: 'sonografia', loadChildren: () => import ('../sonografia/sonografia.module').then(m => m.SonografiaPageModule)},
      { path: 'usuario-registro', loadChildren: () => import ('../usuario-registro/usuario-registro.module').then(m => m.UsuarioRegistroPageModule)},
      { path: 'paciente-registro', loadChildren: () => import ('../paciente-registro/paciente-registro.module').then(m => m.PacienteRegistroPageModule)},
      { path: 'laboratorio', loadChildren: () => import ('../laboratorio/laboratorio.module').then(m => m.LaboratorioPageModule)},
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
