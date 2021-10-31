import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { 
    path: '', redirectTo: 'home', pathMatch: 'full' 
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
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
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
    path: '**', redirectTo: 'home', pathMatch: 'full' 
  },  {
    path: 'rayos-x-update',
    loadChildren: () => import('./rayos-x-update/rayos-x-update.module').then( m => m.RayosXUpdatePageModule)
  },
  {
    path: 'odontologia',
    loadChildren: () => import('./odontologia/odontologia.module').then( m => m.OdontologiaPageModule)
  },
  {
    path: 'odontologia-update',
    loadChildren: () => import('./odontologia-update/odontologia-update.module').then( m => m.OdontologiaUpdatePageModule)
  },
  {
    path: 'laboratorio',
    loadChildren: () => import('./laboratorio/laboratorio.module').then( m => m.LaboratorioPageModule)
  },
  {
    path: 'laboratorio-update',
    loadChildren: () => import('./laboratorio-update/laboratorio-update.module').then( m => m.LaboratorioUpdatePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
