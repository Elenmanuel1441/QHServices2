import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'app-odontodologia-update',
  templateUrl: './odontodologia-update.page.html',
  styleUrls: ['./odontodologia-update.page.scss'],
})
export class OdontodologiaUpdatePage implements OnInit {

  id_col_odontologia: any;
  estado_odontologia: any;
  


 constructor(
  private route: ActivatedRoute,
  private router: Router,
  private _apiservice: ApiService,
  public toastController: ToastController

 ) { 

   this.route.params.subscribe((param:any) =>{
     this.id_col_odontologia = param.id_col_odontologia;
     console.log(this.id_col_odontologia);
     this.getOdontologia(this.id_col_odontologia);
   })
 }

 ngOnInit() {
 }
 getOdontologia(id_col_odontologia)
 {
   this._apiservice.getOdontologia(id_col_odontologia).subscribe((res:any)=>{
     console.log("SUCCESS",res);
     let odontologia = res[0];
     this.estado_odontologia = odontologia.estado_odontologia;
      }, (err:any)=>{
   console.log("ERROR", err)
 })
 
}
 
 updateOdontologia()
{
 let data = {
   
   estado_odontologia: this.estado_odontologia,
  
   }
   this._apiservice.updateOdontologia(this.id_col_odontologia,data).subscribe((res:any)=>{
     console.log("SUCCESS",res);
     this.presentToast('Liberado exitosamente!');
     this.router.navigateByUrl('/odontologia');
     
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
