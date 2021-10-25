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
    pathMatch: 'full'
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
