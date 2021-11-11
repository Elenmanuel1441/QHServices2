import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'app-sonografia',
  templateUrl: './sonografia.page.html',
  styleUrls: ['./sonografia.page.scss'],
})
export class SonografiaPage implements OnInit {

  nombre_paciente: any;
  apellido_paciente: any;
  cedula_paciente: any;
  telefono_paciente: any;
  
  sonografias: any[];
  
  constructor(

    public _apiService: ApiService

 
  ) { 


    this.getSonografias();

  }

  ngOnInit() {
    this.getSonografias();
    setInterval(() => this.getSonografias(), 10000);
  }


  getSonografias(){
    this._apiService.getSonografias().subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      this.sonografias = res;
      },(error: any) => {
        console.log("ERROR ===",error);
      })
    }

}
