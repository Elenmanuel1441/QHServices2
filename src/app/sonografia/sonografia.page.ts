import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-sonografia',
  templateUrl: './sonografia.page.html',
  styleUrls: ['./sonografia.page.scss'],
})
export class SonografiaPage implements OnInit {
  
  nombre: any;
  apellido: any;
  cedula: any;
  fecha_nacimiento: any;
  sonografias: any[];
  public 
  constructor(

    public _apiService: ApiService

 
  ) { 


    this.getSonografias();


   /* this.route.params.subscribe((param:any) =>{
      this.nombre = param.nombre;
      console.log(this.nombre);
      this.getPaciente(this.nombre);      
    })*/
  }

  ngOnInit() {
  }

  getSonografias(){
    this._apiService.getSonografias().subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      this.sonografias = res;
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
  
