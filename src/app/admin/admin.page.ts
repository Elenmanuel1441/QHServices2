import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getRayos_x():void{
    this.router.navigate(['admin/rayos-x']);
  }

  getDashboard(): void{
    this.router.navigate(['/admin/dashboard']);
  }

  getLaboratorio(): void {
    this.router.navigate(['admin/laboratorio']);
  }

  getSonografia(): void {
    this.router.navigate(['admin/sonografia']);
  }

  getOdontodologia(): void {
    this.router.navigate(['admin/odontodologia']);
  }

  registroUsurio(): void {
    this.router.navigate(['admin/usuario-registro']);
  }
   registroPaciente(): void{
     this.router.navigate(['admin/paciente-registro']);
   }

}
