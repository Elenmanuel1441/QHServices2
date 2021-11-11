import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


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

  display: any;

  rayos_x: any[];
  
  constructor(

    public _apiService: ApiService,

  ) { 

    this.getRayosx();
  
  }

  ngOnInit() {
    

    this.getRayosx();
    setInterval(() => this.getRayosx(), 10000);

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