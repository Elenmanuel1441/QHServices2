import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-laboratorio-update',
  templateUrl: './laboratorio-update.page.html',
  styleUrls: ['./laboratorio-update.page.scss'],
})
export class LaboratorioUpdatePage implements OnInit {

  id_col_laboratorio: any;
  estado_laboratorio: any;
  


 constructor(
  private route: ActivatedRoute,
  private router: Router,
  private _apiservice: ApiService,
  public toastController: ToastController

 ) { 

   this.route.params.subscribe((param:any) =>{
     this.id_col_laboratorio = param.id_col_laboratorio;
     console.log(this.id_col_laboratorio);
     this.getLaboratorio(this.id_col_laboratorio);
   })
 }

 ngOnInit() {
 }
 getLaboratorio(id_col_laboratorio)
 {
   this._apiservice.getOdontologia(id_col_laboratorio).subscribe((res:any)=>{
     console.log("SUCCESS",res);
     let laboratorio = res[0];
     this.estado_laboratorio = laboratorio.estado_laboratorio;
      }, (err:any)=>{
   console.log("ERROR", err)
 })
 
}
 
 updateLaboratorio()
{
 let data = {
   
   estado_laboratorio: this.estado_laboratorio,
  
   }
   this._apiservice.updateLaboratorio(this.id_col_laboratorio,data).subscribe((res:any)=>{
     console.log("SUCCESS",res);
     this.presentToast('Liberado exitosamente!');
     this.router.navigateByUrl('admin/laboratorio');
     
 }, (err:any)=>{
   console.log("ERROR", err);
   this.presentToastError('Error al liberar!');
   
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

