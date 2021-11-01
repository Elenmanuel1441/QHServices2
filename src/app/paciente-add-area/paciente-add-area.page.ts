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
     
      areaCheck(){

        
        if(this.area == 1)
        { this.addSonografia()} 

        else if(this.area== 2 ){this.addLaboratorio()}

         else if (this.area == 3){this.addOdontologia()}

          else if (this.area == 4){this.addRayosx()}
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
            this.router.navigateByUrl('/paciente-registro');
    
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
      estados: this.estados
   
          }
          this._apiservice.addRayosx(data).subscribe((res:any) => {
            console.log("SUCCESS ===",res);
            this.id = '';
            this.estados = '';
            this.area = '';
            alert('SUCCESS');
            this.router.navigateByUrl('/paciente-registro');
    
          },(error: any) => {
            alert('ERROR');
            console.log("Error ===",error);
          })
      }
    }
  
    addOdontologia(){
      {
        let data = {
      id: this.id,
      estados: this.estados
   
          }
          this._apiservice.addOdontologia(data).subscribe((res:any) => {
            console.log("SUCCESS ===",res);
            this.id = '';
            this.estados = '';
            this.area = '';
            alert('SUCCESS');
            this.router.navigateByUrl('/paciente-registro');
    
          },(error: any) => {
            alert('ERROR');
            console.log("Error ===",error);
          })
      }
    }

    addLaboratorio(){
      {
        let data = {
      id: this.id,
      estados: this.estados
   
          }
          this._apiservice.addLaboratorio(data).subscribe((res:any) => {
            console.log("SUCCESS ===",res);
            this.id = '';
            this.estados = '';
            this.area = '';
            alert('SUCCESS');
            this.router.navigateByUrl('/paciente-registro');
    
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
  