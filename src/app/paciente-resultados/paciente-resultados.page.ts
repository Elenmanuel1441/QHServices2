import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-paciente-resultados',
  templateUrl: './paciente-resultados.page.html',
  styleUrls: ['./paciente-resultados.page.scss'],
})
export class PacienteResultadosPage implements OnInit {
  nombre_paciente: any;
  apellido_paciente: any;
  cedula_paciente: any;
  telefono_paciente: any;

  Seacrh01: string;
  p: number = 1;
  
  laboratorios: any[];

  condiccion: number = 0;
  constructor(private router: Router, private afAuth: AuthService,public _apiService: ApiService) { 

  }

  ngOnInit() {
    this.getLaboratoriosEntrega();
    setInterval(() => this.getLaboratoriosEntrega(), 5000);
  }
  
  getDashboard(): void{
    this.router.navigateByUrl('/admin/dashboard?type=administrador');
  }


  volver(){
    this.router.navigateByUrl('admin/dashboard?type=administrador');
  }
  
  logout(){
    this.afAuth.logout();
  }
  toggle(){
    if(this.condiccion === 0){
      this.condiccion = 1;
    }
    else{
      this.condiccion = 0;
    }
  }
  getLaboratoriosEntrega(){
    this._apiService.getLaboratoriosEntrega().subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      this.laboratorios = res;
      },(error: any) => {
        console.log("ERROR ===",error);
      })
    }
  
}
