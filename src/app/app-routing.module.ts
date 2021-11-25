import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    
  },    
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
  },

  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'rayos-x',
    loadChildren: () => import('./rayos-x/rayos-x.module').then( m => m.RayosXPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'paciente-registro',
    loadChildren: () => import('./paciente-registro/paciente-registro.module').then( m => m.PacienteRegistroPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'usuario-registro',
    loadChildren: () => import('./usuario-registro/usuario-registro.module').then( m => m.UsuarioRegistroPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'sonografia',
    loadChildren: () => import('./sonografia/sonografia.module').then( m => m.SonografiaPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'paciente-update/:id',
    loadChildren: () => import('./paciente-update/paciente-update.module').then( m => m.PacienteUpdatePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'usuario-update/:id',
    loadChildren: () => import('./usuario-update/usuario-update.module').then( m => m.UsuarioUpdatePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'paciente-add-area/:id',
    loadChildren: () => import('./paciente-add-area/paciente-add-area.module').then( m => m.PacienteAddAreaPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'sonografia-update/:id_col_sonografia',
    loadChildren: () => import('./sonografia-update/sonografia-update.module').then( m => m.SonografiaUpdatePageModule),
    canActivate: [AuthGuard],
  },

  {
    path: 'rayos-x-update/:id_col_rayosx',
    loadChildren: () => import('./rayos-x-update/rayos-x-update.module').then( m => m.RayosXUpdatePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'laboratorio',
    loadChildren: () => import('./laboratorio/laboratorio.module').then( m => m.LaboratorioPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'laboratorio-update/:id_col_laboratorio',
    loadChildren: () => import('./laboratorio-update/laboratorio-update.module').then( m => m.LaboratorioUpdatePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'odontologia',
    loadChildren: () => import('./odontologia/odontologia.module').then( m => m.OdontologiaPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'odontologia-update/:id_col_odontologia',
    loadChildren: () => import('./odontologia-update/odontologia-update.module').then( m => m.OdontologiaUpdatePageModule),
    canActivate: [AuthGuard],
  },

  {
    path: 'reportes',
    loadChildren: () => import('./reportes/reportes.module').then( m => m.ReportesPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'laboratorio-resultados',
    loadChildren: () => import('./laboratorio-resultados/laboratorio-resultados.module').then( m => m.LaboratorioResultadosPageModule)
  },
  {
    path: 'laboratorio-analisis/:id_col_laboratorio',
    loadChildren: () => import('./laboratorio-analisis/laboratorio-analisis.module').then( m => m.LaboratorioAnalisisPageModule)
  },
  {
    path: 'laboratorio-formulario/:id_paciente_analisis',
    loadChildren: () => import('./laboratorio-formulario/laboratorio-formulario.module').then( m => m.LaboratorioFormularioPageModule)
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
