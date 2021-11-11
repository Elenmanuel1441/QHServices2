import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  user_name = "Administrador"

  toogle_menu: boolean;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  getDashboard(): void {
    this.router.navigate(['admin/dashboard']);
  }
  getLogin(): void {
    this.router.navigate(['admin/login']);
  }
  getGestion_usuario(): void{
    this.router.navigate(['admin/usuarios-usurios']);
  }

  getLista(): void{
    this.router.navigate(['admin/lista']);
  }

  getRegistro_pacientes(): void {
    this.router.navigate(['admin/registro-paciente']);
  }

  getLaboratario(): void{
    this.router.navigate(['admin/laboratorio'])
  }

  getEntrega(): void{
    this.router.navigate(['admin/cola-laboratorio']);
  }

  getUsurio(): void{
    this.router.navigate(['admin/usuarios'])
  }

  getPacientesregistrados(): void{
    this.router.navigate(['admin/pacientes-registrados']);
  }

  getSonografia(): void{
    this.router.navigate(['admin/sonografia'])
  }

  getOdontodologia(): void {
    this.router.navigate(['admin/odontodologia']);
  }

  getRayosX(): void {
    this.router.navigate(['admin/rayos-x'])
  }

  // Cierre de sesion 
  logout(){
    this.authService.logout();
  }

}
