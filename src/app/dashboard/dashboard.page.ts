import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { GlobalModel } from '../models/global.model';
import { Covid19Service } from '../services/covid19.service';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color } from 'ng2-charts';
import { MultiDataSet, Label } from 'ng2-charts';
import { ajax, parseJSON } from 'jquery';






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

  //variables para el chart de cantidad de pacientes por mes en las areas

  CantPacMesArea: any = [];
  CantPacLab: any;
  CantPacOdo: any;
  CantPacSon: any;
  CantPacRay: any;

   //variables para el chart de cantidad de resultadis

   CantResultados: any = [];
   AnaliPen	: any;
   AnaliEnt: any;
   AnaliCan: any;

   //variables para la cantidad de resultados entregados y en espera

   CantResulEspEnt: any = [];
   PacEspResu	: any;
   PacEntResu	: any;

   //variables para la cantidad de pacientes atendidos por sexo

   CantPacAtendidoSexo: any = [];
   CanPacMac	: any;
   CanPacFem	: any;

   //cantidad de pacientes registrados

   CantPacientesRegist: any =[];
   CanPacientes: any;
 
  //Chart de lineas
  barChartOptions2: ChartOptions = {
    responsive: true,
  
  };

  barChartOptions3: ChartOptions = {
    responsive: true,
  };
  
  
  barChartLabels2: Label[] = ['Laboratorio', 'Odontología', 'Sonografía', 'Rayos X'];
  barChartType2: ChartType = 'doughnut';
  barChartLegend2 = true;
  barChartPlugins2 = [];

  barChartLabels3: Label[] = ['Entregado', 'Pendiente', 'Cencelado'];
  barChartTyp3: ChartType = 'pie';
  barChartLegend3 = true;
  barChartPlugins3 = [];
 
  barChartData2: ChartDataSets[] = [
    { data: []}
  ];

  barChartData3: ChartDataSets[] = [
    { data: []}
  ];


  
  constructor(
    private _apiservice: ApiService,
    private activatedRoute: ActivatedRoute,
    private covid19Service: Covid19Service,
    


  ) {
      // covid 19 api 
      this.data = new GlobalModel();



    //this.ReportAbdominal();

    this.limpiarvariblesPacientes();

    this.getCount_rayos_x();
    setInterval(() => this.getCount_rayos_x(), 10000);

    this.getCount_sonografia();
    setInterval(() => this.getCount_sonografia(), 10000);
  
     this.getCount_laboratorio();
     setInterval(() => this.getCount_laboratorio(), 10000);

    this.getCount_odontologia();
    setInterval(() => this.getCount_odontologia(), 10000);
     // llamar los datos para el chart de cantidad de pacientes por mes
     this.getCantPacAreaMes();
     setInterval(() => this.getCantPacAreaMes(), 9000);
    //llena el chart
    this.llenarChartCantPacAreaMes();
    setInterval(() => this.llenarChartCantPacAreaMes(), 10000);

   this.getPacResul();
   setInterval(() => this.getPacResul(), 9000);

   this.llenarCharAnalisis();
   setInterval(() => this.llenarCharAnalisis(), 10000);

   this.getCountPacEntEspResul();
   setInterval(() => this.getCountPacEntEspResul(), 10000);

   this.getCountPacSexo();
   setInterval(() => this.getCountPacSexo(), 10000);

   this.getCountCantPacRegist();
   setInterval(() => this.getCountCantPacRegist(), 10000);

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

 llenarChartCantPacAreaMes(){
  this.barChartData2 = [
    { data: [[this.CantPacLab], [this.CantPacOdo], [this.CantPacSon], [this.CantPacRay]], label: 'Cantidad de pacientes por mes' }
  ];
}

limpiarvariblesPacientes()
{
  this.CantPacSon = ''
    this.CantPacLab = ''
    this.CantPacOdo = ''
    this.CantPacRay = ''
}

getCantPacAreaMes()
{
  this._apiservice.getCantPacAreaMes().subscribe((res:any) => {
    console.log("SUCCESS ===",res);
    let CantPacMesArea = res[0];
    this.CantPacSon = CantPacMesArea.CantPacSon;
    this.CantPacLab = CantPacMesArea.CantPacLab;
    this.CantPacOdo = CantPacMesArea.CantPacOdo;
    this.CantPacRay = CantPacMesArea.CantPacRay;
  
    },(error: any) => {
      console.log("ERROR ===",error);
    })
}

getPacResul()
{
  this._apiservice.getPacResul().subscribe((res:any) => {
    console.log("SUCCESS ===",res);
    let CantResultados = res[0];
    this.AnaliPen = CantResultados.AnaliPen;
    this.AnaliEnt = CantResultados.AnaliEnt;
    this.CantPacSon = CantResultados.AnaliCan;
    },(error: any) => {
      console.log("ERROR ===",error);
    })
}

llenarCharAnalisis(){
  this.barChartData3 = [
    { data: [[this.AnaliPen], [this.AnaliEnt], [this.AnaliCan]], label: 'Estado de los Resultados' }
  ];
}

getCountPacEntEspResul()
{
  this._apiservice.getCountPacEntEspResul().subscribe((res:any) => {
    console.log("SUCCESS ===",res);
    let CantResulEspEnt = res[0];
    this.PacEspResu = CantResulEspEnt.PacEspResu;
    this.PacEntResu = CantResulEspEnt.PacEntResu;
    },(error: any) => {
      console.log("ERROR ===",error);
    })
}
getCountPacSexo()
{
  this._apiservice.getCountPacSexo().subscribe((res:any) => {
    console.log("SUCCESS ===",res);
    let CantPacAtendidoSexo = res[0];
    this.CanPacMac = CantPacAtendidoSexo.CanPacMac;
    this.CanPacFem = CantPacAtendidoSexo.CanPacFem;
    },(error: any) => {
      console.log("ERROR ===",error);
    })
}
getCountCantPacRegist()
{
  this._apiservice.getCountCantPacRegist().subscribe((res:any) => {
    console.log("SUCCESS ===",res);
     let CantPacientesRegist = res[0];
     this.CanPacientes = CantPacientesRegist.CanPacientes;
    },(error: any) => {
      console.log("ERROR ===",error);
    })
}


}


