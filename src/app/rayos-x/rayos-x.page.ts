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


   
  }

  ngOnInit() {
    
  }


  getRayosx(){
    this._apiService.getRayosx().subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      this.rayos_x = res;
      },(error: any) => {
        console.log("ERROR ===",error);
      })
    }


}
  
