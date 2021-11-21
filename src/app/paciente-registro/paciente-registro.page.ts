import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-paciente-registro',
  templateUrl: './paciente-registro.page.html',
  styleUrls: ['./paciente-registro.page.scss'],
})
export class PacienteRegistroPage implements OnInit {

 //datos de prueba de la nueva tabla
  
 title = 'angulardatatables';
 dtOptions: any = {};
 
 //fin de datos de pruebas

  nombre: any;
  apellido: any;
  cedula: any;
  telefono: any;
  fecha_nacimiento: any;
  alergias: any;
  tipo_sangre: any;
  padecimientos: any;
  ocupacion: any;
  sexo: any;
  ars: any;
  direccion: any;
public pacientes: any = [];

  constructor(
    public _apiService: ApiService,
    public toastController: ToastController
    
  ) {
 this.getPacientes();
    this.limpiarCampos();
   }
  

 async addPaciente()
{ 
  if(this.nombre == "")
  {
      const toast = await this.toastController.create({
      message: 'Ingrese un nombre',
      duration: 1500,
      color: "danger",
      cssClass: 'toastVal',
      position: "top",
      });
      toast.present();
    }
    else if(this.apellido == "")
  {
      const toast = await this.toastController.create({
      message: 'Ingrese un Apellido',
      duration: 1500,
      color: "danger",
      cssClass: 'toastVal',
      position: "top",
      });
      toast.present();
    }
    else if(this.cedula == "")
    {
        const toast = await this.toastController.create({
        message: 'Ingrese una identificación',
        duration: 1500,
        color: "danger",
        cssClass: 'toastVal',
        position: "top",
        });
        toast.present();
      }
      else if(this.telefono == "")
      {
          const toast = await this.toastController.create({
          message: 'Ingrese una teléfono',
          duration: 1500,
          color: "danger",
          cssClass: 'toastVal',
          position: "top",
          });
          toast.present();
        }
        else if(this.alergias == "")
        {
            const toast = await this.toastController.create({
            message: 'Complete el campo alergias',
            duration: 1500,
            color: "danger",
            cssClass: 'toastVal',
            position: "top",
            });
            toast.present();
          }
          else if(this.padecimientos == "")
          {
              const toast = await this.toastController.create({
              message: 'Complete el campo padecimientos',
              duration: 1500,
              color: "danger",
              cssClass: 'toastVal',
              position: "top",
              });
              toast.present();
            }
            else if(this.ocupacion == "")
            {
                const toast = await this.toastController.create({
                message: 'Ingrese una ocupación',
                duration: 1500,
                color: "danger",
                cssClass: 'toastVal',
                position: "top",
                });
                toast.present();
              }
              else if(this.direccion == "")
              {
                  const toast = await this.toastController.create({
                  message: 'Ingrese una dirección',
                  duration: 1500,
                  color: "danger",
                  cssClass: 'toastVal',
                  position: "top",
                  });
                  toast.present();
                }
                else if(this.fecha_nacimiento == "")
                {
                    const toast = await this.toastController.create({
                    message: 'Ingrese una fecha',
                    duration: 1500,
                    color: "danger",
                    cssClass: 'toastVal',
                    position: "top",
                    });
                    toast.present();
                  }
                  else if(this.tipo_sangre == "")
                  {
                      const toast = await this.toastController.create({
                      message: 'Seleccione un tipo de sangre',
                      duration: 1500,
                      color: "danger",
                      cssClass: 'toastVal',
                      position: "top",
                      });
                      toast.present();
                    }
                    else if(this.sexo == "")
                    {
                        const toast = await this.toastController.create({
                        message: 'Seleccione un sexo',
                        duration: 1500,
                        color: "danger",
                        cssClass: 'toastVal',
                        position: "top",
                        });
                        toast.present();
                      }
                      else if(this.ars == "")
                    {
                        const toast = await this.toastController.create({
                        message: 'Seleccione una ARS',
                        duration: 1500,
                        color: "danger",
                        cssClass: 'toastVal',
                        position: "top",
                        });
                        toast.present();
                      }
            
else{
    let data = {
  
    nombre: this.nombre,
    apellido: this.apellido,
    cedula: this.cedula,
    telefono: this.telefono,
  
    alergias: this.alergias,
    padecimientos: this.padecimientos,
    ocupacion: this.ocupacion,
    direccion: this.direccion,
  
    fecha_nacimiento: this.fecha_nacimiento,
    tipo_sangre: this.tipo_sangre,
    sexo: this.sexo,
    ars: this.ars,
   } 
   
        this._apiService.addPaciente(data).subscribe((res:any) => {
          console.log("SUCCESS ===",res);
          this.limpiarCampos();
          this.presentToast('Guardado exitosamente!');
          this.getPacientes();
          
        },(error: any) => {
          this.presentToastErrorADD('Error al guardar!');
          console.log("Error ===",error);
        })
  }
}
  

  ngOnInit() 
  {
   this.limpiarCampos();
   
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
            extend:'copy', "className": 'btn btn-secondary'
          }, 
          { 
            extend:'csv',
            title: 'Reporte de usurio',  "className":  'btn btn-primary' 
          }, 
          {
           extend: 'excel',
           title: 'Reporte de usurio', "className": 'btn btn-success'
          },
          {
            extend: 'pdf',
            title: 'Reporte de usurio', "className": 'btn btn-danger'
          }
      ]
      
  };
  
  //fin de los datos de pruebas


  }

  limpiarCampos()
  {
    this.nombre = '';
    this.apellido = '';
    this.cedula = '';
    this.telefono = '';
    this.fecha_nacimiento = '';
    this.alergias = '';
    this.tipo_sangre = '';
    this.padecimientos = '';
    this.ocupacion = '';
    this.sexo = '';
    this.ars = '';
    this.direccion = '';
  }

  getPacientes(){
    this._apiService.getPacientes().subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      this.pacientes = res;
      },(error: any) => {
        console.log("ERROR ===",error);
      })
    }
      delePaciente(id){
        this._apiService.delePaciente(id).subscribe((res:any) => {
          this.presentToastEli('Eliminado exitosamente!');
          this.getPacientes();
          },(error: any) => {
            this.presentToastError('Error al eliminar!');
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

  async presentToastEli (mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 1500,
      color: "danger",
      cssClass: 'toastEli',
      position: "bottom",
    });
    toast.present();
  }

  async presentToastError (mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 1500,
      color: "danger",
      cssClass: 'toastEli',
      position: "bottom",
    });
    toast.present();
  }

  async presentToastErrorADD (mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 1500,
      color: "danger",
      cssClass: 'toastEli',
      position: "bottom",
    });
    toast.present();
  }

}

