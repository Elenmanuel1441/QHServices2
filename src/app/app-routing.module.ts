import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
  },

  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'rayos-x',
    loadChildren: () => import('./rayos-x/rayos-x.module').then( m => m.RayosXPageModule)
  },
  {
    path: 'paciente-registro',
    loadChildren: () => import('./paciente-registro/paciente-registro.module').then( m => m.PacienteRegistroPageModule)
  },
  {
    path: 'usuario-registro',
    loadChildren: () => import('./usuario-registro/usuario-registro.module').then( m => m.UsuarioRegistroPageModule)
  },
  {
    path: 'sonografia',
    loadChildren: () => import('./sonografia/sonografia.module').then( m => m.SonografiaPageModule)
  },
  {
    path: 'paciente-update/:id',
    loadChildren: () => import('./paciente-update/paciente-update.module').then( m => m.PacienteUpdatePageModule)
  },
  {
    path: 'usuario-update/:id',
    loadChildren: () => import('./usuario-update/usuario-update.module').then( m => m.UsuarioUpdatePageModule)
  },
  {
    path: 'paciente-add-area/:id',
    loadChildren: () => import('./paciente-add-area/paciente-add-area.module').then( m => m.PacienteAddAreaPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'sonografia-update/:id_col_sonografia',
    loadChildren: () => import('./sonografia-update/sonografia-update.module').then( m => m.SonografiaUpdatePageModule)
  },

  {
    path: 'rayos-x-update/:id_col_rayosx',
    loadChildren: () => import('./rayos-x-update/rayos-x-update.module').then( m => m.RayosXUpdatePageModule)
  },
  {
    path: 'laboratorio',
    loadChildren: () => import('./laboratorio/laboratorio.module').then( m => m.LaboratorioPageModule)
  },
  {
    path: 'laboratorio-update/:id_col_laboratorio',
    loadChildren: () => import('./laboratorio-update/laboratorio-update.module').then( m => m.LaboratorioUpdatePageModule)
  },
  {
    path: 'odontologia',
    loadChildren: () => import('./odontologia/odontologia.module').then( m => m.OdontologiaPageModule)
  },
  {
    path: 'odontologia-update/:id_col_odontologia',
    loadChildren: () => import('./odontologia-update/odontologia-update.module').then( m => m.OdontologiaUpdatePageModule)
  },

  {
    path: 'reportes',
    loadChildren: () => import('./reportes/reportes.module').then( m => m.ReportesPageModule)
  },
  { 
    path: '**', redirectTo: 'login', pathMatch: 'full' 
  },






 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
