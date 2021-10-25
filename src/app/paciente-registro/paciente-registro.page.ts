import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-paciente-registro',
  templateUrl: './paciente-registro.page.html',
  styleUrls: ['./paciente-registro.page.scss'],
})
export class PacienteRegistroPage {
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
  pacientes: any = [];

  constructor(
    public _apiService: ApiService
  ) {
    this.getPacientes();
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
        alert('SUCCESS');
        this.getPacientes();

      },(error: any) => {
        alert('ERROR');
        console.log("Error ===",error);
      })
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
          console.log("SUCCESS");
          this.getPacientes();
          },(error: any) => {
            console.log("ERROR")
          })
  }
}

