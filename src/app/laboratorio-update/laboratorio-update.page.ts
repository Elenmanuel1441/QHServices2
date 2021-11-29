import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-laboratorio-update',
  templateUrl: './laboratorio-update.page.html',
  styleUrls: ['./laboratorio-update.page.scss'],
})
export class LaboratorioUpdatePage implements OnInit {

  p: number = 1;
 condiccion: number = 0;
  id_col_laboratorio: any;
  estado_laboratorio: any;
  id_paciente: any;
  id_analisis: any;
  id_paciente_analisis: any;
  nombre_paciente: any;
  apellido_paciente: any;

  paciente_analisis: any = [];

 tablaAnalisis ={
  id_analisis: '',
  estado: ''

}

 constructor(
  private route: ActivatedRoute,
  private router: Router,
  private _apiservice: ApiService,
  public toastController: ToastController,
  private afAuth: AuthService


 ) { 

   this.route.params.subscribe((param:any) =>{
     this.id_col_laboratorio = param.id_col_laboratorio;
     console.log(this.id_col_laboratorio);
     this.getLaboratorio(this.id_col_laboratorio);
   })
   
   this.getAnalisis(this.id_paciente);
   setInterval(() => this.getAnalisis(this.id_paciente), 1000);

   this.getLaboratorio(this.id_col_laboratorio);
   //setInterval(() => this.getLaboratorio(this.id_col_laboratorio), 1000);

  }

 ngOnInit() {
 }
 getLaboratorio(id_col_laboratorio)
 {
   this._apiservice.getLaboratorio(id_col_laboratorio).subscribe((res:any)=>{
     console.log("SUCCESS",res);
     let laboratorio = res[0];
     this.estado_laboratorio = laboratorio.estado_laboratorio;
     this.id_paciente = laboratorio.id_paciente;
     this.nombre_paciente = laboratorio.nombre_paciente;
     this.apellido_paciente = laboratorio.apellido_paciente;
      }, (err:any)=>{
   console.log("ERROR", err)
 })

}

getAnalisis(id_paciente){
  this._apiservice.getAnalisis(id_paciente).subscribe((res:any)=>{
    console.log("SUCCESS",res);
    this.paciente_analisis = res;
//borra esto ya que no era necesario
    // let paciente_analisis = res[0];
    // this.tablaAnalisis.id_analisis = paciente_analisis.id_analisis;
    // this.tablaAnalisis.estado = paciente_analisis.estado;
    
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


cancelAnalisis(id_paciente_analisis)
{
    this._apiservice.cancelAnalisis(id_paciente_analisis).subscribe((res:any)=>{
     console.log("SUCCESS",res);
     this.presentToast('Cancelado exitosamente!');
     this.getAnalisis(this.id_analisis);
     this.getLaboratorio(this.id_col_laboratorio)
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
addAnalisis(){
  let data = {
    id_paciente: this.id_paciente,
    id_analisis: this.id_analisis,
    id_col_laboratorio: this.id_col_laboratorio
 
        }
        this._apiservice.addAnalisis(data).subscribe((res:any) => {
          console.log("SUCCESS ===",res);
          this.presentToast('Asignado correctamente!');
          this.getAnalisis(this.id_paciente);
        
          
  
        },(error: any) => {
          this.presentToastError('Error al asignar!');
          console.log("Error ===",error);
        })
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



}

