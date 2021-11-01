import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-rayos-x-update',
  templateUrl: './rayos-x-update.page.html',
  styleUrls: ['./rayos-x-update.page.scss'],
})
export class RayosXUpdatePage implements OnInit {  
  id_col_rayosx: any;
  estado_rayosx: any;
  


 constructor(
  private route: ActivatedRoute,
  private router: Router,
  private _apiservice: ApiService

 ) { 

   this.route.params.subscribe((param:any) =>{
     this.id_col_rayosx = param.id_col_rayosx;
     console.log(this.id_col_rayosx);
     this.getRayox(this.id_col_rayosx);
   })
 }

 ngOnInit() {
 }
 getRayox(id_col_rayosx)
 {
   this._apiservice.getRayox(id_col_rayosx).subscribe((res:any)=>{
     console.log("SUCCESS",res);
     let rayosx = res[0];
     this.estado_rayosx = rayosx.estado_sonografia;
      }, (err:any)=>{
   console.log("ERROR", err)
 })
 
}
 
 updateRayosx()
{
 let data = {
   
   estado_rayosx: this.estado_rayosx,
  
   }
   this._apiservice.updateRayosx(this.id_col_rayosx,data).subscribe((res:any)=>{
     console.log("SUCCESS",res);
     this.router.navigateByUrl('/rayos-x');
     
 }, (err:any)=>{
   console.log("ERROR", err);
   
 })
}
 
 
}

