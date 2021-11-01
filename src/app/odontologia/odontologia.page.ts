import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-odontologia',
  templateUrl: './odontologia.page.html',
  styleUrls: ['./odontologia.page.scss'],
})
export class OdontologiaPage implements OnInit { 
  nombre_paciente: any;
  apellido_paciente: any;
  cedula_paciente: any;
  telefono_paciente: any;
  
  odontologia: any[];
  
  constructor(

    public _apiService: ApiService

 
  ) { 


    this.getOdontologias();


   
  }

  ngOnInit() {
    
  }


  getOdontologias(){
    this._apiService.getOdontologias().subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      this.odontologia= res;
      },(error: any) => {
        console.log("ERROR ===",error);
      })
    }


}
  
