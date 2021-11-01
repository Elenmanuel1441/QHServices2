import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio.page.html',
  styleUrls: ['./laboratorio.page.scss'],
})
export class LaboratorioPage implements OnInit {

  nombre_paciente: any;
  apellido_paciente: any;
  cedula_paciente: any;
  telefono_paciente: any;
  
  laboratorios: any[];
  
  constructor(

    public _apiService: ApiService

 
  ) { 


    this.getLaboratorios();


   
  }

  ngOnInit() {
    
  }


  getLaboratorios(){
    this._apiService.getLaboratorios().subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      this.laboratorios = res;
      },(error: any) => {
        console.log("ERROR ===",error);
      })
    }


}
  
