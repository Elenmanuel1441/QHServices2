import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../api.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { AuthService } from '../services/auth.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-laboratorio-formulario',
  templateUrl: './laboratorio-formulario.page.html',
  styleUrls: ['./laboratorio-formulario.page.scss'],
})
export class LaboratorioFormularioPage implements OnInit {
  id_analisis: any;
  estado: any;
  id_paciente_analisis : any;
  id_paciente : any;
  nombre_paciente : any;
  apellido_paciente : any;
  sexo_paciente : any;
  Edad : any;
  showExamenOrina: boolean;
  showExamenCoprologico: boolean;
  showCovid19: boolean;
  showTipificacion: boolean;



  constructor( private route: ActivatedRoute,
    private router: Router,
    public _apiservice: ApiService,
    public toastController: ToastController,
    private afAuth: AuthService) {

      this.route.params.subscribe((param:any) =>{
        this.id_paciente_analisis = param.id_paciente_analisis;
        console.log(this.id_paciente_analisis);
        this.getAnalisi(this.id_paciente_analisis);
        setTimeout(() => 
        {
           //aqui va la consulta
           this.checkAnalisis();
           console.log(this.id_analisis,this.showCovid19,this.showExamenCoprologico,this.showExamenOrina,this.showTipificacion)
        },
        1500);
      })
   


     }

  ngOnInit() {
  }



  getAnalisi(id_paciente_analisis)
 {
   this._apiservice.getAnalisi(id_paciente_analisis).subscribe((res:any)=>{
     console.log("SUCCESS",res);
     let analisis = res[0];
      this.id_analisis = analisis.id_analisis  ;
      this.estado = analisis.estado;
      this.id_paciente_analisis = analisis.id_paciente_analisis ;
      this.id_paciente= analisis.id_paciente ;
      this.nombre_paciente=   analisis.nombre_paciente ;
      this.apellido_paciente =  analisis.apellido_paciente ;
      this.sexo_paciente= analisis.sexo_paciente ;
      this.Edad =analisis.EDAD ;
 
     
     
      }, (err:any)=>{
   console.log("ERROR", err)
 })
 
 }
 checkAnalisis(){

  if (this.id_analisis == 'EXAMEN DE ORINA') {
    this.showExamenOrina = true;
    this.showTipificacion= false;
    this.showExamenCoprologico= false;
    this.showCovid19= false;

  }
 else if (this.id_analisis == 'EXAMEN COPROLOGICO') {
    this.showExamenOrina = false;
    this.showTipificacion= false;
    this.showExamenCoprologico= true;
    this.showCovid19= false;

  }
  else if (this.id_analisis == 'PRUEBA ANTIGENICA CV-19') {
    this.showExamenOrina = false;
    this.showTipificacion= false;
    this.showExamenCoprologico= false;
    this.showCovid19= true;

  }

  else if (this.id_analisis == 'TIPIFICACION') {
    this.showExamenOrina = false;
    this.showTipificacion= true;
    this.showExamenCoprologico= false;
    this.showCovid19= false;

  }








 }




}
