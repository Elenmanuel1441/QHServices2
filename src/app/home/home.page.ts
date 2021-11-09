import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

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


}
