import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public data = [
    {No: '1',  Nombre:'Elenmanuel', Apellido: 'Estrella', Telefono:'809-234-2345', Cedula:'031-2010819-8'},
    {No: '2',  Nombre: 'Ericcson', Apellido:'Reyes', Telefono:'809-234-0813', Cedula:'031-8710819-8'},
    {No: '3',  Nombre: 'Luis', Apellido:'Castillo', Telefono:'809-344-6572', Cedula:'402-2010819-8'},
    {No: '4',  Nombre: 'Juan Carlos', Apellido:'Torres', Telefono:'809-809-0813', Cedula:'031-1230819-8'},
    {No: '5',  Nombre:'Elenmanuel', Apellido: 'Estrella', Telefono:'809-234-2345', Cedula:'031-2010819-8'},
    {No: '6',  Nombre: 'Ericcson', Apellido:'Reyes', Telefono:'809-234-0813', Cedula:'031-8710819-8'},
    {No: '7',  Nombre: 'Luis', Apellido:'Castillo', Telefono:'809-344-6572', Cedula:'402-2010819-8'},
    {No: '8',  Nombre: 'Juan Carlos', Apellido:'Torres', Telefono:'809-809-0813', Cedula:'031-1230819-8'},
];

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

fileName= 'ExcelSheet.xlsx';

userList = [

  {
  
  "id": 1,
  
  "name": "Leanne Graham",
  
  "username": "Bret",
  
  "email": "Sincere@april.biz"
  
  },
  
  {
  
  "id": 2,
  
  "name": "Ervin Howell",
  
  "username": "Antonette",
  
  "email": "Shanna@melissa.tv"
  
  },
  
  {
  
  "id": 3,
  
  "name": "Clementine Bauch",
  
  "username": "Samantha",
  
  "email": "Nathan@yesenia.net"
  
  },
  
  {
  
  "id": 4,
  
  "name": "Patricia Lebsack",
  
  "username": "Karianne",
  
  "email": "Julianne.OConner@kory.org"
  
  },
  
  {
  
  "id": 5,
  
  "name": "Chelsey Dietrich",
  
  "username": "Kamren",
  
  "email": "Lucio_Hettinger@annie.ca"
  
  }
  
  ];

}
