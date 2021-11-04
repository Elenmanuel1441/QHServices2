import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  rayos_x: any;

  rayos_x_res: any = [];

  constructor(
    private _apiservice: ApiService,

  ) {}

  ngOnInit() 
  {
    this.getCount_rayos_x();
    setInterval(() => this.getCount_rayos_x(), 10000);
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

}
