import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-laboratorio-update',
  templateUrl: './laboratorio-update.page.html',
  styleUrls: ['./laboratorio-update.page.scss'],
})
export class LaboratorioUpdatePage implements OnInit {

  id_col_laboratorio: any;
  estado_laboratorio: any;
  


 constructor(
  private route: ActivatedRoute,
  private router: Router,
  private _apiservice: ApiService

 ) { 

   this.route.params.subscribe((param:any) =>{
     this.id_col_laboratorio = param.id_col_laboratorio;
     console.log(this.id_col_laboratorio);
     this.getLaboratorio(this.id_col_laboratorio);
   })
 }

 ngOnInit() {
 }
 getLaboratorio(id_col_laboratorio)
 {
   this._apiservice.getOdontologia(id_col_laboratorio).subscribe((res:any)=>{
     console.log("SUCCESS",res);
     let laboratorio = res[0];
     this.estado_laboratorio = laboratorio.estado_laboratorio;
      }, (err:any)=>{
   console.log("ERROR", err)
 })
 
}
 
 updateLaboratorio()
{
 let data = {
   
   estado_laboratorio: this.estado_laboratorio,
  
   }
   this._apiservice.updateLaboratorio(this.id_col_laboratorio,data).subscribe((res:any)=>{
     console.log("SUCCESS",res);
     this.router.navigateByUrl('/laboratorio');
     
 }, (err:any)=>{
   console.log("ERROR", err);
   
 })
}
 
 
}

