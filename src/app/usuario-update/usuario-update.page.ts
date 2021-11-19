import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.page.html',
  styleUrls: ['./usuario-update.page.scss'],
})
export class UsuarioUpdatePage implements OnInit {
  id: any;
  nombre: any;
  contrasena: any;
  estado: any;
  rol: any;



 constructor(
  private route: ActivatedRoute,
  private router: Router,
  private _apiservice: ApiService,
  public toastController: ToastController

 ) { 

   this.route.params.subscribe((param:any) =>{
     this.id = param.id;
     console.log(this.id);
     this.getUsuario(this.id);
   })
 }

 ngOnInit() {
 }
 getUsuario(id)
 {
   this._apiservice.getUsuario(id).subscribe((res:any)=>{
     console.log("SUCCESS",res);
     let nombres = res[0];
     this.nombre = nombres.nombre;
     this.contrasena = nombres.contraseña;
     this.estado = nombres.estado;
     this.rol = nombres.rol;
 }, (err:any)=>{
   console.log("ERROR", err)
 })
 
}
 
 UpdateUsuario()
{
 let data = {
   nombre: this.nombre,
   contrasena: this.contrasena,
   estado: this.estado,
   rol: this.rol
   }
   this._apiservice.UpdateUsuario(this.id,data).subscribe((res:any)=>{
     console.log("SUCCESS",res);
     this.presentToast('Actualizado exitosamente!');
     this.router.navigate(['admin/usuario-registro']);
     
 }, (err:any)=>{
  this.presentToastError('Error al actualizar!');
   console.log("ERROR", err)
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
    position: "bottom",
    
  });
  toast.present();
}

async presentToastError(mensaje: string) {
  const toast = await this.toastController.create({
    message: mensaje,
    duration: 1500,
    color: "danger",
    cssClass: 'toastAdd',
    position: "bottom",
    
  });
  toast.present();
}
}

 


