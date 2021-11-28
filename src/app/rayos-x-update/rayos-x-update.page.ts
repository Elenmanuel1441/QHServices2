import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-rayos-x-update',
  templateUrl: './rayos-x-update.page.html',
  styleUrls: ['./rayos-x-update.page.scss'],
})
export class RayosXUpdatePage implements OnInit {  
  id_col_rayosx: any;
  estado_rayosx: any;

  nombre_paciente: any;
  apellido_paciente: any;
  cedula_paciente: any;
  condiccion: number = 0;

  
 constructor(
  private route: ActivatedRoute,
  private router: Router,
  private _apiservice: ApiService,
  public toastController: ToastController,
  private afAuth: AuthService

 ) { 

   this.route.params.subscribe((param:any) =>{
     this.id_col_rayosx = param.id_col_rayosx;
     console.log(this.id_col_rayosx);
     this.getRayox(this.id_col_rayosx);
   })
 }

 ngOnInit() {
 }
 getRayox(id_col_rayosx)
 {
   this._apiservice.getRayox(id_col_rayosx).subscribe((res:any)=>{
     console.log("SUCCESS",res);
     let rayosx = res[0];
     this.nombre_paciente = rayosx.nombre_paciente;
     this.apellido_paciente = rayosx.apellido_paciente;
     this.cedula_paciente = rayosx.cedula_paciente;
     this.estado_rayosx = rayosx.estado_rayosx;
      }, (err:any)=>{
   console.log("ERROR", err)
 })
 
}
 
 updateRayosx()
{
 let data = {
   
   estado_rayosx: this.estado_rayosx,
   nombre: this.nombre_paciente,
   apellido: this.apellido_paciente,
   cedula: this.cedula_paciente,

   }
   this._apiservice.updateRayosx(this.id_col_rayosx,data).subscribe((res:any)=>{
     console.log("SUCCESS",res);
     this.presentToast('Liberado exitosamente!');
     this.router.navigateByUrl('admin/rayos-x');
     
 }, (err:any)=>{
  this.presentToastError('Error al liberar!');
   console.log("ERROR", err);
   
 })
}

async presentToastWithOptions() {
  const toast = await this.toastController.create({
    header: 'Toast header',
    message: 'Click to Close',
    position: 'top',
    buttons: [
      {
        side: 'start',
        icon: 'star',
        text: 'Favorite',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Done',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });

}
async presentToast(mensaje: string) {
  const toast = await this.toastController.create({
    message: mensaje,
    duration: 1500,
    color: "success",
    cssClass: 'toastAdd',
    position: "top",
    
  });
  toast.present();
}

async presentToastError(mensaje: string) {
  const toast = await this.toastController.create({
    message: mensaje,
    duration: 1500,
    color: "danger",
    cssClass: 'toastAdd',
    position: "top",
    
  });
  toast.present();
}
 

volver(){
  this.router.navigateByUrl('admin/rayos-x');
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

