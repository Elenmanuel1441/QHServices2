import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../api.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-paciente-registro',
  templateUrl: './paciente-registro.page.html',
  styleUrls: ['./paciente-registro.page.scss'],
})
export class PacienteRegistroPage implements OnInit {

  p: number = 1;

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
  pacientes: any = ['nombre','apellido','cedula','telefono','sexo','ars'];

  search_01: string;

  search_02: string;

  search_03: string;

  fileName= 'Reporte de pacientes.xlsx';

  constructor(
    public _apiService: ApiService,
    public toastController: ToastController
    
  ) {
    this.getPacientes();
  //  this.limpiarCampos();
   }

  addPaciente()
  {
    let data = {
  nombre: this.nombre,
  apellido: this.apellido,
  cedula: this.cedula,
  telefono: this.telefono,
  fecha_nacimiento: this.fecha_nacimiento,
  alergias: this.alergias,
  tipo_sangre: this.tipo_sangre,
  padecimientos: this.padecimientos,
  ocupacion: this.ocupacion,
  sexo: this.sexo,
  ars: this.ars,
  direccion: this.direccion
      }
      this._apiService.addPaciente(data).subscribe((res:any) => {
        console.log("SUCCESS ===",res);
        this.presentToast('Guardado exitosamente!');
        this.getPacientes();
        this.limpiarCampos();
       
      },(error: any) => {
        this.presentToastErrorADD('Error al guardar!');
        console.log("Error ===",error);
      })
  }

  ngOnInit() 
  {
   
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

  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table-paciente');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }
}

