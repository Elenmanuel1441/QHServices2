import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-paciente-entrega',
  templateUrl: './paciente-entrega.page.html',
  styleUrls: ['./paciente-entrega.page.scss'],
})
export class PacienteEntregaPage implements OnInit {
  condiccion: number = 0;
  id_col_laboratorio: any;
  estado_laboratorio: any;
  id_paciente: any;
  id_analisis: any;
  id_paciente_analisis: any;
  nombre_paciente: any;
  apellido_paciente: any;

  paciente_analisis: any = [];



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
     this.getLaboratorioEntrega(this.id_col_laboratorio);
   
   })
   
   this.getAnalisisEntrega(this.id_paciente);
   setInterval(()=>{ this.getAnalisisEntrega(this.id_paciente),console.log(this.id_paciente)},2000)
  // setTimeout(() => 
   //{
      //aqui va la consulta
    //  this.getAnalisis(this.id_paciente)
  // },
  // 1500);
  }

 ngOnInit() {
 }
 getLaboratorioEntrega(id_col_laboratorio)
 {
   this._apiservice.getLaboratorioEntrega(id_col_laboratorio).subscribe((res:any)=>{
     console.log("SUCCESS",res);
     let laboratorio = res[0];
     this.estado_laboratorio = laboratorio.estado_laboratorio;
     this.id_paciente = laboratorio.id_paciente;
     this.nombre_paciente = laboratorio.nombre_paciente;
     this.apellido_paciente = laboratorio.apellido_paciente;
     console.log(["Paciente",this.id_paciente])
      }, (err:any)=>{
   console.log("ERROR", err)
 })

}

getAnalisisEntrega(id_paciente){
  this._apiservice.getAnalisisEntrega(id_paciente).subscribe((res:any)=>{
    console.log("SUCCESS",res);
    this.paciente_analisis = res;

    
     }, (err:any)=>{
  console.log("ERROR", err)
})
}

 updateLaboratorioEntrega()
{
 let data = {
   
   estado_laboratorio: this.estado_laboratorio,
  
   }
   this._apiservice.updateLaboratorioEntrega(this.id_col_laboratorio,data).subscribe((res:any)=>{
     console.log("SUCCESS",res);
     this.presentToast('Liberado exitosamente!');
     this.router.navigateByUrl('/paciente-resultados');
     
 }, (err:any)=>{
   console.log("ERROR", err);
   this.presentToastError('Error al liberar!');
   
 })
}


deliverAnalisis(id_paciente_analisis)
{
    this._apiservice.deliverAnalisis(id_paciente_analisis).subscribe((res:any)=>{
     console.log("SUCCESS",res);
     this.presentToast('Cancelado exitosamente!');
     this.getAnalisisEntrega(this.id_analisis);
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
/*
addAnalisis(){
  let data = {
    id_paciente: this.id_paciente,
    id_analisis: this.id_analisis,
    id_col_laboratorio: this.id_col_laboratorio
 
        }
        this._apiservice.addAnalisis(data).subscribe((res:any) => {
          console.log("SUCCESS ===",res);
          this.presentToast('Asignado correctamente!');
          this.getAnalisisEntrega(this.id_paciente);
        
          
  
        },(error: any) => {
          this.presentToastError('Error al asignar!');
          console.log("Error ===",error);
        })
    }

    */
  


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
  this.router.navigateByUrl('admin/laboratorio-resultados');
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
