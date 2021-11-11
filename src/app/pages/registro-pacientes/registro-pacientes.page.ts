import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Registro } from 'src/app/models/registro.model';
import { DataBaseService } from 'src/app/services/database.service';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { ToastController } from '@ionic/angular';







@Component({
  selector: 'app-registro-pacientes',
  templateUrl: './registro-pacientes.page.html',
  styleUrls: ['./registro-pacientes.page.scss'],
})
export class RegistroPacientesPage implements OnInit{

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

  searchTerm: string;

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
    //  this.limpiarCampos();
        setTimeout(() => this.limpiarCampos,1000);
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



} 