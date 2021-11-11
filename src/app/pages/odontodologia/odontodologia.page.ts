import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-odontodologia',
  templateUrl: './odontodologia.page.html',
  styleUrls: ['./odontodologia.page.scss'],
})
export class OdontodologiaPage implements OnInit {

  nombre_paciente: any;
  apellido_paciente: any;
  cedula_paciente: any;
  telefono_paciente: any;
  
  odontologia: any[];
  
  constructor(public _apiService: ApiService)
   { 
    this.getOdontologias();
   }

  ngOnInit()
   {
    this.getOdontologias();
    setInterval(() => this.getOdontologias(), 10000);
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
