import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-rayos-x',
  templateUrl: './rayos-x.page.html',
  styleUrls: ['./rayos-x.page.scss'],
})
export class RayosXPage implements OnInit {
  nombre: any;
  estado: any;
  rol: any;

   
  nombres: any = [];

  constructor(
    public _apiService: ApiService
  ) { 
    this.getUsuarios();

    }

  ngOnInit() {
  }
  getUsuarios(){
    this._apiService.getUsuarios().subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      this.nombres = res;
      },(error: any) => {
        console.log("ERROR ===",error);
      })

 }
} 
