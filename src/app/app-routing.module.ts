import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
    {
      path: 'login',
      loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
    },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'gestion-usuario',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/gestion-usuario/gestion-usuario.module').then( m => m.GestionUsuarioPageModule)
  },
  {
    path: 'registro-pacientes',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/registro-pacientes/registro-pacientes.module').then( m => m.RegistroPacientesPageModule)
  },
  {
    path: 'laboratorio',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/laboratorio/laboratorio.module').then( m => m.LaboratorioPageModule)
  },
  {
    path: 'cola-laboratorio',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/cola-laboratorio/cola-laboratorio.module').then( m => m.ColaLaboratorioPageModule)
  },
  {
    path: 'pacientes-registrados',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/pacientes-registrados/pacientes-registrados.module').then( m => m.PacientesRegistradosPageModule)
  },
  {
    path: 'usuarios',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'rayos-x',
    loadChildren: () => import('./pages/rayos-x/rayos-x.module').then( m => m.RayosXPageModule)
  },
  {
    path: 'odontodologia',
    loadChildren: () => import('./pages/odontodologia/odontodologia.module').then( m => m.OdontodologiaPageModule)
  },
  {
    path: 'odontodologia-update',
    loadChildren: () => import('./pages/odontodologia-update/odontodologia-update.module').then( m => m.OdontodologiaUpdatePageModule)
  },
  {
    path: 'pacientes-add-area/:id',
    loadChildren: () => import('./pages/pacientes-add-area/pacientes-add-area.module').then( m => m.PacientesAddAreaPageModule)
  },
  {
    path: 'paciente-update/:id',
    loadChildren: () => import('./pages/paciente-update/paciente-update.module').then( m => m.PacienteUpdatePageModule)
  },
  {
    path: 'rayos-x-update',
    loadChildren: () => import('./pages/rayos-x-update/rayos-x-update.module').then( m => m.RayosXUpdatePageModule)
  },
  {
    path: 'sonografia',
    loadChildren: () => import('./pages/sonografia/sonografia.module').then( m => m.SonografiaPageModule)
  },
  {
    path: 'sonografia-update',
    loadChildren: () => import('./pages/sonografia-update/sonografia-update.module').then( m => m.SonografiaUpdatePageModule)
  },
  {
    path: 'registro-usurios',
    loadChildren: () => import('./pages/registro-usurios/registro-usurios.module').then( m => m.RegistroUsuriosPageModule)
  },
  {
    path: 'usuarios-update',
    loadChildren: () => import('./pages/usuarios-update/usuarios-update.module').then( m => m.UsuariosUpdatePageModule)
  },
  {
   
      path: '**',
      redirectTo: 'admin',
      pathMatch: 'full'
    
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
