import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-paciente-update',
  templateUrl: './paciente-update.page.html',
  styleUrls: ['./paciente-update.page.scss'],
})
export class PacienteUpdatePage implements OnInit {
  id: any;
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
  rol: any;

  constructor(
   private route: ActivatedRoute,
   private router: Router,
   private _apiservice: ApiService
  ) { 
    this.route.params.subscribe((param:any) =>{
      this.id = param.id;
      console.log(this.id);
      this.getPaciente(this.id);      
    })
  }

  ngOnInit() {
  }
  getPaciente(id){
    this._apiservice.getPaciente(id).subscribe((res:any) => {
      console.log("SUCCESS",res);
      let pacientes = res[0];
      this.nombre = pacientes.nombre_paciente;
      this.apellido = pacientes.apellido_paciente;
      this.cedula = pacientes.cedula_paciente;
      this.telefono = pacientes.telefono_paciente;
      this.fecha_nacimiento = pacientes.fecha_n_paciente;
      this.alergias = pacientes.alergia_paciente;
      this.tipo_sangre = pacientes.tipo_sangre_paciente;
      this.padecimientos = pacientes.padecimiento_paciente;
      this.ocupacion = pacientes.ocupacion_paciente;
      this.sexo = pacientes.sexo_paciente;
      this.ars = pacientes.ars_paciente;
      this.direccion = pacientes.direccion_paciente;
      this.rol = pacientes.rol;
      
      },(error: any) => {
        console.log("ERROR ===",error);
      })

    }
    updatePaciente()
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
        direccion: this.direccion,
        rol: this.rol 
    }
    this._apiservice.updatePaciente(this.id,data).subscribe((res:any)=>{
      console.log("SUCCESS",res);
      this.router.navigateByUrl('/registro-paciente');
  }, (err:any)=>{
    console.log("ERROR", err)
  })
    }

    }
  
