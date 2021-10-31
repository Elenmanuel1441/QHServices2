import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-rayos-x',
  templateUrl: './rayos-x.page.html',
  styleUrls: ['./rayos-x.page.scss'],
})
export class RayosXPage implements OnInit {
  
  nombre_paciente: any;
  apellido_paciente: any;
  cedula_paciente: any;
  telefono_paciente: any;
  
  rayos_x: any[];
  
  constructor(

    public _apiService: ApiService

 
  ) { 


    this.getRayosx();


   /* this.route.params.subscribe((param:any) =>{
      this.nombre = param.nombre;
      console.log(this.nombre);
      this.getPaciente(this.nombre);      
    })*/
  }

  ngOnInit() {
    this.getRayosx();
  }


  getRayosx(){
    this._apiService.getRayosx().subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      this.rayos_x = res;
      },(error: any) => {
        console.log("ERROR ===",error);
      })
    }
/*
  getPaciente(id){
    this._apiservice.getPaciente(id).subscribe((res:any) => {
      console.log("SUCCESS",res);
      let pacientes = res[0];
      this.nombre = pacientes.nombre_paciente;
     
      },(error: any) => {
        console.log("ERROR ===",error);
      })

    }
    updatePaciente()
    {
      let data = {
        nombre: this.nombre,
      
    }
    this._apiservice.updatePaciente(this.nombre,data).subscribe((res:any)=>{
      console.log("SUCCESS",res);
      this.router.navigateByUrl('/registro-paciente');
  }, (err:any)=>{
    console.log("ERROR", err)
   })
  }*/

}
  
