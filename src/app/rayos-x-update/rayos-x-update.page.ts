import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-rayos-x-update',
  templateUrl: './rayos-x-update.page.html',
  styleUrls: ['./rayos-x-update.page.scss'],
})
export class RayosXUpdatePage implements OnInit {  
  id_col_rayosx: any;
  estado_rayosx: any;
  


 constructor(
  private route: ActivatedRoute,
  private router: Router,
  private _apiservice: ApiService,
  public toastController: ToastController

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
     this.estado_rayosx = rayosx.estado_rayosx;
      }, (err:any)=>{
   console.log("ERROR", err)
 })
 
}
 
 updateRayosx()
{
 let data = {
   
   estado_rayosx: this.estado_rayosx,
  
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

