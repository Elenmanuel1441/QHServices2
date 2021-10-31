import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paciente-add-area',
  templateUrl: './paciente-add-area.page.html',
  styleUrls: ['./paciente-add-area.page.scss'],
})
export class PacienteAddAreaPage implements OnInit {
  id: any;
  estados:any;
  area: any;
  
  
  
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      public _apiservice: ApiService
    ) {
  
    this.route.params.subscribe((param:any) =>{
        this.id = param.id;
        console.log(this.id);
        this.getPaciente(this.id);})
  
     }
    addSonografia(){
      {
        let data = {
      id: this.id,
      estados: this.estados
   
          }
          this._apiservice.addSonografia(data).subscribe((res:any) => {
            console.log("SUCCESS ===",res);
            this.id = '';
            this.estados = '';
            this.area = '';
            alert('SUCCESS');
            
    
          },(error: any) => {
            alert('ERROR');
            console.log("Error ===",error);
          })
      }
    }
    addRayosx(){
      {
        let data = {
      id: this.id,
      estado_sono: this.estados
   
          }
          this._apiservice.addRayosx(data).subscribe((res:any) => {
            console.log("SUCCESS ===",res);
            this.id = '';
            this.estados = '';
            this.area = '';
            alert('SUCCESS');
            
    
          },(error: any) => {
            alert('ERROR');
            console.log("Error ===",error);
          })
      }
    }
  
    ngOnInit() {
    }
    getPaciente(id){
      this._apiservice.getPaciente(id).subscribe((res:any) => {
        console.log("SUCCESS",res);
        let pacientes = res[0];
        this.id = pacientes.id_paciente;
    
        
        },(error: any) => {
          console.log("ERROR ===",error);
        })
  
      }
     
  }
  