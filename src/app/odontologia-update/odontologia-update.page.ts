import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-odontologia-update',
  templateUrl: './odontologia-update.page.html',
  styleUrls: ['./odontologia-update.page.scss'],
})
export class OdontologiaUpdatePage implements OnInit {


  id_col_odontologia: any;
  estado_odontologia: any;
  


 constructor(
  private route: ActivatedRoute,
  private router: Router,
  private _apiservice: ApiService

 ) { 

   this.route.params.subscribe((param:any) =>{
     this.id_col_odontologia = param.id_col_odontologia;
     console.log(this.id_col_odontologia);
     this.getOdontologia(this.id_col_odontologia);
   })
 }

 ngOnInit() {
 }
 getOdontologia(id_col_odontologia)
 {
   this._apiservice.getOdontologia(id_col_odontologia).subscribe((res:any)=>{
     console.log("SUCCESS",res);
     let odontologia = res[0];
     this.estado_odontologia = odontologia.estado_odontologia;
      }, (err:any)=>{
   console.log("ERROR", err)
 })
 
}
 
 updateOdontologia()
{
 let data = {
   
   estado_odontologia: this.estado_odontologia,
  
   }
   this._apiservice.updateOdontologia(this.id_col_odontologia,data).subscribe((res:any)=>{
     console.log("SUCCESS",res);
     this.router.navigateByUrl('/odontologia');
     
 }, (err:any)=>{
   console.log("ERROR", err);
   
 })
}
 
 
}

