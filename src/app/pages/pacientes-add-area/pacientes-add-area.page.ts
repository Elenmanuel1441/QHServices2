import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-pacientes-add-area',
  templateUrl: './pacientes-add-area.page.html',
  styleUrls: ['./pacientes-add-area.page.scss'],
})
export class PacientesAddAreaPage implements OnInit {

  id: any;
  estados= 1;
  area: any;
  
  showComp = true;
  
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      public _apiservice: ApiService,
      public toastController: ToastController
    ) {
  
    this.route.params.subscribe((param:any) =>{
        this.id = param.id;
        console.log(this.id);
        this.getPaciente(this.id);})
  
     }
     
      areaCheck(){

        
        if(this.area == 1)
        { this.addSonografia()} 

        else if(this.area== 2 ){this.addLaboratorio()}

         else if (this.area == 3){this.addOdontologia()}

          else if (this.area == 4){this.addRayosx()}
      }




    addSonografia(){
      {
        let data = {
      id: this.id,
      estados: this.estados
   
          }
          this._apiservice.addSonografia(data).subscribe((res:any) => {
            console.log("SUCCESS ===",res);
            this.presentToast('Asignado correctamente!');
            this.id = '';
          
            this.area = '';
            this.router.navigateByUrl('/paciente-registro');
    
          },(error: any) => {
            this.presentToastError('Error al asignar!');
            console.log("Error ===",error);
          })
      }
    }
    addRayosx(){
      {
        let data = {
      id: this.id,
      estados: this.estados
   
          }
          this._apiservice.addRayosx(data).subscribe((res:any) => {
            console.log("SUCCESS ===",res);
            this.presentToast('Asignado correctamente!');
            this.id = '';
            
            this.area = '';
       
            this.router.navigateByUrl('/paciente-registro');
    
          },(error: any) => {
            this.presentToastError('Error al asignar!');
            console.log("Error ===",error);
          })
      }
    }
  
    addOdontologia(){
      {
        let data = {
      id: this.id,
      estados: this.estados
   
          }
          this._apiservice.addOdontologia(data).subscribe((res:any) => {
            console.log("SUCCESS ===",res);
            this.presentToast('Asignado correctamente!');
            this.id = '';
          
            this.area = '';
            
            this.router.navigateByUrl('/paciente-registro');
    
          },(error: any) => {
            this.presentToastError('Error al asignar!');
            console.log("Error ===",error);
          })
      }
    }

    addLaboratorio(){
      {
        let data = {
      id: this.id,
      estados: this.estados
   
          }
          this._apiservice.addLaboratorio(data).subscribe((res:any) => {
            console.log("SUCCESS ===",res);
            this.presentToast('Asignado correctamente!');
            this.id = '';
            
            this.area = '';
            
            this.router.navigateByUrl('/paciente-registro');
    
          },(error: any) => {
            this.presentToastError('Error al asignar!');
            console.log("Error ===",error);
          })
      }
    }

    ngOnInit() {
    }
    getPaciente(id){
      this._apiservice.getPaciente(id).subscribe((res:any) => {
        console.log("SUCCESS",res);
        let pacientes = res[0];
        this.id = pacientes.id_paciente;
    
        
        },(error: any) => {
          console.log("ERROR ===",error);
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
