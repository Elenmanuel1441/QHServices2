import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { ApiService } from '../api.service';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-usuario-registro',
  templateUrl: './usuario-registro.page.html',
  styleUrls: ['./usuario-registro.page.scss'],
})
export class UsuarioRegistroPage implements OnInit{
  nombre: any;
  contrasena: any;
  estado: any;
  rol: any;

  buscarUsuario: any;
  
  nombres: any = ['nombre', 'estado','rol'];

  search_01: string;

  search_02: string;

  search_03: string;

  constructor(
    public _apiService: ApiService,
    public toastController: ToastController,
    public alertController: AlertController
  ){
    this.getUsuarios();
    setInterval(() => this.getUsuarios(), 10000);
    this.limpiarCampos();
  }


  async addUsuario()
  {
    if(this.nombre == "")
    {
      const toast = await this.toastController.create({
      message: 'Ingrese un nombre',
      duration: 1500,
      color: "danger",
      cssClass: 'toastVal',
      position: "bottom",
      });
      toast.present();
    }
    else if(this.contrasena == "")
    {
      const toast = await this.toastController.create({
        message: 'Ingrese una password',
        duration: 1500,
      color: "danger",
      cssClass: 'toastVal',
      position: "bottom",
      });
      toast.present();
    }
    else if(this.rol == "")
    {
      const toast = await this.toastController.create({
        message: 'Ingrese un rol',
        duration: 1500,
      color: "danger",
      cssClass: 'toastVal',
      position: "bottom",
      });
      toast.present();
    }
    else if(this.estado == "")
    {
      const toast = await this.toastController.create({
        message: 'Ingrese un estado',
        duration: 1500,
      color: "danger",
      cssClass: 'toastVal',
      position: "bottom",
      });
      toast.present();
    }
else{

  let data = {
    nombre: this.nombre,
    contrasena: this.contrasena,
    estado: this.estado,
    rol: this.rol
  }

  this._apiService.addusuario(data).subscribe((res:any) => {
  console.log("SUCCESS ===",res);
  this.limpiarCampos(); 
  this.presentToast('Guardado exitosamente!');
  this.getUsuarios();

  },(error: any) => {
    this.presentToastErrAdd('Error al guardar!');
    console.log("Error ===",error);
  })
  
}
  
}
    
  
  ngOnInit() 
  {
   this.limpiarCampos();
  }
  
   getUsuarios(){
    this._apiService.getUsuarios().subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      this.nombres = res;
      },(error: any) => {
        console.log("ERROR ===",error);
      })
 }

limpiarCampos()
{
  this.nombre = '';
  this.contrasena = '';
  this.estado = '';  
  this.rol = ''; 
}



deleUsuarios(id){
   
this._apiService.deleUsuarios(id).subscribe((res:any) => {
   console.log("SUCCESS");
   this.presentToastEli('Eliminado exitosamente!');
   this.getUsuarios();
   },(error: any) => {
     this.presentToastErrEli('Error al eliminar!');
    console.log("ERROR")
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

  async presentToastErrEli (mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 1500,
      color: "danger",
      cssClass: 'toastEli',
      position: "bottom",
    });
    toast.present();
  }

  async presentToastErrAdd (mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 1500,
      color: "danger",
      cssClass: 'toastEli',
      position: "bottom",
    });
    toast.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'normal',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

async presentAlert()
{
  const alert = await this.alertController.create({
    header: "Borrar usuario",
    message: "Estas seguro que quieres borrar el usuario?",
    buttons: [
      {
         text: "Si",
         handler: () => {  
     
            }
         }      
  ],
  });
  await alert.present()
  let result = await alert.onDidDismiss();
  console.log(result);
 }

 
fileName= 'Reporte de usuario.xlsx';

  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table-user');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }


}

