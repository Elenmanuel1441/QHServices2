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
  laboratorio: boolean;
  autorizado: true;

  constructor(private router: Router, private afAuth: AuthService, private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((urlData) => {
      console.log(urlData);
      this.type = urlData.type;
      if (this.type == 'administrador' )
       {
        this.showRegister = true;
       } 
 
    });
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
