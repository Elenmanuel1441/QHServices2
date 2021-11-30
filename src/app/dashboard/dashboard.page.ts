import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { GlobalModel } from '../models/global.model';
import { Covid19Service } from '../services/covid19.service';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color } from 'ng2-charts';
import { MultiDataSet, Label } from 'ng2-charts';
import { ajax } from 'jquery';






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

ChartData: any = [];

// covid 19 ciudades
global: boolean;
country: string;
data: GlobalModel;
dailyData: any[];
countries: any[];
lineCharData: any [] = [
  {data: [65,64,33,44], label: 'Temp label'}
];
lineCharType = 'line';
lineChartLabels: any[] = 
[
  'label01', 'label02', 'label03'
];
barChartData: any[] = [
  {data: [65,76,33], label: 'label'}
]

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

  showRegister: boolean
  type: string = '';

  //Chart de lineas
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  
  barChartLabels: Label[] = ['Sonografia', 'Rayos X', 'Laboratorio', 'Odontología'];
  barChartType: ChartType = 'doughnut';
  barChartLegend = true;
  barChartPlugins = [];
 
  barChartData2: ChartDataSets[] = [
    { data: [2, 5, 8, 3], label: 'Colas con más personas' }
  ];

  constructor(
    private _apiservice: ApiService,
    private activatedRoute: ActivatedRoute,
    private covid19Service: Covid19Service,
    


  ) {
      // covid 19 api 
      this.data = new GlobalModel();



    //this.ReportAbdominal();

    this.getCount_rayos_x();
    setInterval(() => this.getCount_rayos_x(), 10000);

    this.getCount_sonografia();
    setInterval(() => this.getCount_sonografia(), 10000);
  
     this.getCount_laboratorio();
     setInterval(() => this.getCount_laboratorio(), 10000);

    this.getCount_odontologia();
    setInterval(() => this.getCount_odontologia(), 10000);

    this.llenarChart();
    setInterval(() => this.llenarChart(), 10000);

    // this.getChart();
    // setInterval(() => this.getChart(), 6000);

  }
covid: any;
  ngOnInit() 
  {

    this.covid19Service.getResultaldosCovid().subscribe((data) => {
      console.log(data);
      this.covid = data

    })

    this.global = true;
   

    this.activatedRoute.queryParams.subscribe((urlData) => {
      console.log(urlData);
      this.type = urlData.type;
      if (this.type == 'Administrador' || this.type == 'administrador' || this.type == 'admin') {
        this.showRegister = true;
      }      
      else {
          this.showRegister = false;
      }
    });


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


  // covid 19

  }


  getCount_rayos_x()
  {
    this._apiservice.getCount_rayos_x().subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      let rayos_x_res = res[0];
      this.rayos_x = rayos_x_res.resultado;
      },(error: any) => {
        console.log("ERROR ===",error);
      });

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

  llenarChart(){
    this.barChartData2 = [
      { data: [[this.sonografia], [this.rayos_x], [this.laboratorio], [this.odontologia]], label: 'Colas con más personas' }
    ];





  }
getCount_laboratorio()
{
  this._apiservice.getCount_laboratorio().subscribe((res:any) => {
    console.log("SUCCESS ===",res);
    let laboratorio_res = res[0];
    this.laboratorio = parseInt(laboratorio_res.resultado);
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

  //  Resultado ciudades pandemia covid 19
//prueba de traer datos para el chart

// getChart()
// {
//   this._apiservice.getChart().subscribe((res:any) => {
//     console.log("SUCCESS ===",res);
//     this.ChartData = res;
//     },(error: any) => {
//       console.log("ERROR ===",error);
//     })
// }

  }


