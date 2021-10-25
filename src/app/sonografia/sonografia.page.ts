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

  constructor(
   private route: ActivatedRoute,
   private router: Router,
   private _apiservice: ApiService
 
  ) { 
    this.route.params.subscribe((param:any) =>{
      this.nombre = param.nombre;
      console.log(this.nombre);
      this.getPaciente(this.nombre);      
    })
  }

  ngOnInit() {
  }

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
  }

}
  
