import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-laboratorio-resultados',
  templateUrl: './laboratorio-resultados.page.html',
  styleUrls: ['./laboratorio-resultados.page.scss'],
})
export class LaboratorioResultadosPage implements OnInit {
  nombre_paciente: any;
  apellido_paciente: any;
  cedula_paciente: any;
  telefono_paciente: any;

  p: number = 1;
  
  laboratorios: any[];

  condiccion: number = 0;
  constructor(private router: Router, private afAuth: AuthService,public _apiService: ApiService) { 

  }

  ngOnInit() {
    this.getLaboratoriosBio();
    setInterval(() => this.getLaboratoriosBio(), 3000);
  }


  volver(){
    this.router.navigateByUrl('admin/laboratorio');
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
  getLaboratoriosBio(){
    this._apiService.getLaboratoriosBio().subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      this.laboratorios = res;
      },(error: any) => {
        console.log("ERROR ===",error);
      })
    }
  
}
