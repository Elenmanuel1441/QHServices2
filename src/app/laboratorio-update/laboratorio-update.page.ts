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

  public data = [
    {No: '1',  Nombre:'Elenmanuel', Apellido: 'Estrella', Telefono:'809-234-2345', Cedula:'031-2010819-8'},
    {No: '2',  Nombre: 'Ericcson', Apellido:'Reyes', Telefono:'809-234-0813', Cedula:'031-8710819-8'},
    {No: '3',  Nombre: 'Luis', Apellido:'Castillo', Telefono:'809-344-6572', Cedula:'402-2010819-8'},
    {No: '4',  Nombre: 'Juan Carlos', Apellido:'Torres', Telefono:'809-809-0813', Cedula:'031-1230819-8'},
    {No: '5',  Nombre:'Elenmanuel', Apellido: 'Estrella', Telefono:'809-234-2345', Cedula:'031-2010819-8'},
    {No: '6',  Nombre: 'Ericcson', Apellido:'Reyes', Telefono:'809-234-0813', Cedula:'031-8710819-8'},
    {No: '7',  Nombre: 'Luis', Apellido:'Castillo', Telefono:'809-344-6572', Cedula:'402-2010819-8'},
    {No: '8',  Nombre: 'Juan Carlos', Apellido:'Torres', Telefono:'809-809-0813', Cedula:'031-1230819-8'},
];

title = 'angulardatatables';
 dtOptions: any = {};


 condiccion: number = 0;
  id_col_laboratorio: any;
  estado_laboratorio: any;
  id_paciente: any;
  id_analisis: any;



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
      }, (err:any)=>{
   console.log("ERROR", err)
 })

 //cargar los datos de pruebas de la nueva tabla
 this.dtOptions = {
  pagingType: 'full_numbers',
  pageLength: 5,
  language: {
    url: 'assets/json/idioma_esp.json'
  } ,
 processing: true,
  dom: 'Bfrtip',
    buttons: [
        {
          extend:'copy', "className": 'btn btn-secondary',
          title: 'Reporte de pacientes'
        }, 
        { 
          extend:'csv',
          title: 'Reporte de pacientes',  "className":  'btn btn-primary' 
        }, 
        {
         extend: 'excel',
         title: 'Reporte de pacientes', "className": 'btn btn-success'
        },
        {
          extend: 'pdf',
          title: 'Reporte de usurio', "className": 'btn btn-danger'
        }

    ]
    
};

//fin de los datos de pruebas
 
}
 




getAnalisis(id_paciente){
  this._apiservice.getAnalisis(id_paciente).subscribe((res:any)=>{
    console.log("SUCCESS",res);
    let paciente_analisis = res[0];
    this.tablaAnalisis.id_analisis = paciente_analisis.id_analisis;
    this.tablaAnalisis.estado = paciente_analisis.estado;
    
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

