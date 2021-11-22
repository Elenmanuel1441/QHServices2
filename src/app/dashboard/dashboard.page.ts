import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

//datos del reporte abdominal
nombre: string;
apellido: string;
edad: string;
morfologia: string;
LesionesFocales: string;
MedidaHigado: string;
ViasBiliares: string;
versiculaForma: string;
versiculaSituacion: string;
versiculaPared: string;
versiculaLongitud: string;
versiculaAncho: string;
versiculaLitos: string;
versiculaPolipos: string;
pancreasForma: string;
pancreasSituacion: string;
pancreasCabeza: string;
pancreasCuerpo: string;
pancreasCola: string;
pancreasContorno: string;
pancreasEcogenecidad: string;
rinonDVisualiza: string;
rinonDForma: string;
rinonDContorno: string;
rinonDRelacion: string;
rinonDEvidencia: string;
rinonDLitiasis: string;
rinonDTumoraciones: string;
rinonLVisualiza: string;
rinonLForma: string;
rinonLContornos: string;
rinonLRelacion: string;
rinonLEvidencia: string;
rinonLlitiasis: string;
rinonLTumoraciones: string;
bazoVisualiza: string;
bazoForma: string;
bazoEcotextura: string;
bazoTumoraciones: string;
bazoLongitud: string;
bazoAncho: string;
AortaDiametro: string;
AortaValor: string;
fecha: string;

reportAbdominal: any = [];
//fin de los datos

 title = 'angulardatatables';
 dtOptions: any = {};

  rayos_x: any;

  sonografia: any;

  laboratorio: any;

  odontologia: any;

  rayos_x_res: any = [];

  sonografia_res: any = [];

  laboratorio_res: any = [];
  
  odontologia_res: any = [];


  constructor(
    private _apiservice: ApiService,


  ) {
    this.ReportAbdominal();
    setInterval(() => this.ReportAbdominal(), 10000);

    this.getCount_rayos_x();
    setInterval(() => this.getCount_rayos_x(), 10000);

    this.getCount_sonografia();
    setInterval(() => this.getCount_sonografia(), 10000);
  
     this.getCount_laboratorio();
     setInterval(() => this.getCount_laboratorio(), 10000);

    this.getCount_odontologia();
    setInterval(() => this.getCount_odontologia(), 10000);

  }

  ngOnInit() 
  {
    //cargar los datos de pruebas de la nueva tabla
   this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 5,
    language: {
      url: 'assets/json/idioma_esp.json'
    } ,
    processing: true,
    dom: 'Bfrtip',
      buttons: [
          {
            extend:'copy', "className": 'btn btn-secondary',
            title: 'Reporte de pacientes'
          }, 
          { 
            extend:'csv',
            title: 'Reporte de pacientes',  "className":  'btn btn-primary' 
          }, 
          {
           extend: 'excel',
           title: 'Reporte de pacientes', "className": 'btn btn-success'
          },
          {
            extend: 'pdf',
            title: 'Reporte de usurio', "className": 'btn btn-danger'
          }

      ]
      
  };
  
  //fin de los datos de pruebas
     
  }


  getCount_rayos_x()
  {
    this._apiservice.getCount_rayos_x().subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      let rayos_x_res = res[0];
      this.rayos_x = rayos_x_res.resultado;
      },(error: any) => {
        console.log("ERROR ===",error);
      })
  }

  getCount_sonografia()
  {
    this._apiservice.getCount_sonografia().subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      let sonografia_res = res[0];
      this.sonografia = sonografia_res.resultado;
      },(error: any) => {
        console.log("ERROR ===",error);
      })
    
  }

getCount_laboratorio()
{
  this._apiservice.getCount_laboratorio().subscribe((res:any) => {
    console.log("SUCCESS ===",res);
    let laboratorio_res = res[0];
    this.laboratorio = laboratorio_res.resultado;
    },(error: any) => {
      console.log("ERROR ===",error);
    })
}

getCount_odontologia()
{
  this._apiservice.getCount_odontologia().subscribe((res:any) => {
    console.log("SUCCESS ===",res);
    let odontologia_res = res[0];
    this.odontologia = odontologia_res.resultado;
    },(error: any) => {
      console.log("ERROR ===",error);
    })
 }

 ReportAbdominal(){
  this._apiservice.ReportAbdominal().subscribe((res:any) => {
    console.log("SUCCESS ===",res);
    this.reportAbdominal = res;
    },(error: any) => {
      console.log("ERROR ===",error);
    })
   }
 }


