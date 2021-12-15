import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  condiccion: number = 0;
  type: string = '';
  showRegister: boolean;
  prueba: boolean;
  isAdmin:boolean;

  constructor(private router: Router, private afAuth: AuthService, private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    localStorage.getItem('type') == 'administrador' ? this.isAdmin = false : this.isAdmin = true;
    this.activatedRoute.queryParams.subscribe((urlData) => {
      console.log(urlData);
      this.type = urlData.type;
      if (
        this.type == 'Administrador' ||
        this.type == 'administrador' ||
        this.type == 'admin'
      ) {
        this.showRegister = true;
        } 
      else if (this.type == 'Sonografía') {
        return this.getSonografia();
      } else if (this.type == 'Laboratorio') {
        return this.getLaboratorio();
      } else if (this.type == 'Rayos X') {
        return this.getRayos_x();
      } else if (this.type == 'Odontología') {
        return this.getOdontologia();
      }
    });
  
  }


  volver(){
    this.router.navigateByUrl('admin/dashboard?type=administrador');
  }

  getRayos_x():void{
    this.router.navigate(['admin/rayos-x']);
  }

  getDashboard(): void{
    this.router.navigateByUrl('/admin/dashboard?type=administrador');
  }

  getLaboratorio(): void {
    this.router.navigate(['admin/laboratorio']);
  }

  getResultados(): void {
    this.router.navigate(['/laboratorio-resultados']);
  }

  getSonografia(): void {
    this.router.navigate(['admin/sonografia']);
  }

  getOdontologia(): void {
    this.router.navigate(['admin/odontologia']);
  }

  registroUsurio(): void {
    this.router.navigate(['admin/usuario-registro']);
  }
   registroPaciente(): void{
     this.router.navigate(['admin/paciente-registro']);
   }

   PacientesResultados(): void{
    this.router.navigate(['/paciente-resultados']);
  }

   ResultadosPacientes(): void{
    this.router.navigate(['paciente-resultados']);
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



}
