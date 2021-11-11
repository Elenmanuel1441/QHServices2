import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from '../login/login.page';
import { AdminPage } from './admin.page';
import { AuthGuard } from 'src/app/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
    canActivate: [AuthGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard'},
      { path: 'dashboard', loadChildren: () => import ('../dashboard/dashboard.module').then(m => m.DashboardPageModule)},
      { path: 'login', loadChildren: () => import ('../login/login.module').then(m => m.LoginPageModule)},
      { path: 'gestion-usuario', loadChildren: () => import ('../gestion-usuario/gestion-usuario.module').then(m => m.GestionUsuarioPageModule)},
      { path: 'registro-paciente', loadChildren: () => import ('../registro-pacientes/registro-pacientes.module').then(m => m.RegistroPacientesPageModule)},
      { path: 'laboratorio', loadChildren: () => import ('../laboratorio/laboratorio.module').then(m => m.LaboratorioPageModule)},
      { path: 'cola-laboratorio', loadChildren: () => import ('../cola-laboratorio/cola-laboratorio.module').then(m => m.ColaLaboratorioPageModule)},
      { path: 'pacientes-registrados', loadChildren: () => import ('../pacientes-registrados/pacientes-registrados.module').then(m => m.PacientesRegistradosPageModule)},
      { path: 'usuarios', loadChildren: () => import ('../usuarios/usuarios.module').then(m => m.UsuariosPageModule)},
      { path: 'laboratorio', loadChildren:() => import ('../laboratorio/laboratorio.module').then(m => m.LaboratorioPageModule)},
      { path: 'usuarios-usurios', loadChildren: () => import ('../registro-usurios/registro-usurios.module').then(m => m.RegistroUsuriosPageModule)},
      { path: 'rayos-x', loadChildren: () => import ('../rayos-x/rayos-x.module').then(m => m.RayosXPageModule)},
      { path: 'odontodologia', loadChildren: () => import ('../odontodologia/odontodologia.module').then(m => m.OdontodologiaPageModule)},
      { path: 'sonografia', loadChildren:() => import ('../sonografia/sonografia.module').then(m => m.SonografiaPageModule)}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
