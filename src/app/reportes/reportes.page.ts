import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit {

  condiccion: number = 0;

  title = 'angulardatatables';
 dtOptions: any = {};

  constructor(private router: Router,
    private afAuth: AuthService,
    private _apiservice: ApiService,)
     {
      this. getCountSonoAbdoNoAseg();
      setInterval(() => this.getCountSonoAbdoNoAseg(), 10000);

      this.getCountSonoAbdoSeg();
      setInterval(() => this.getCountSonoAbdoSeg(), 10000);

      this.getCountSonbitoNoSeg();
      setInterval(() => this.getCountSonbitoNoSeg(), 10000);

      this.getCountSonObitoSeg();
      setInterval(() => this.getCountSonObitoSeg(), 10000);

   }
 //Report sonografia abdominal
   ReportSonoAbdoNoSeg: any = [];
   ReportSonoAbdoSeg: any = [];
   SonoAbdoNoSeg: number = 0;
   SonoAbdoSeg: number = 0;

    //Report sonografia Obito
    ReportSonObitoNoSeg: any = [];
    ReportSonObitoSeg: any = [];
    SonoObitoNoSeg: number = 0;
    SonoObitoSeg: number = 0;

 

  ngOnInit() {

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
            title: 'Reporte de Sonografía'
          }, 
          { 
            extend:'csv',
            title: 'Reporte de Sonografía',  "className":  'btn btn-primary' 
          }, 
          {
           extend: 'excel',
           title: 'Reporte de Sonografía', "className": 'btn btn-success'
          },
          {
            extend: 'pdf',
            title: 'Reporte de Sonografía', "className": 'btn btn-danger'
          }

      ]
      
  };
  
  //fin de los datos de pruebas
    
  }


  volver(){
    this.router.navigateByUrl('admin/dashboard?type=administrador');
  }
  
  logout(){
    this.afAuth.logout();
  }
  toggle(){
    if(this.condiccion === 0){
      this.condiccion = 1;
    }
    else{
      this.condiccion = 0;
    }
  }
 

  SumaTotalSonoAbdo(a, b):number{
    return a + b
  }

  getCountSonoAbdoNoAseg()
  {
      this._apiservice.getCountSonoAbdoNoAseg().subscribe((res:any) => {
        console.log("SUCCESS ===",res);
        let ReportSonoAbdoNoSeg = res[0];
        this.SonoAbdoNoSeg = parseInt(ReportSonoAbdoNoSeg.resultado);
        },(error: any) => {
          console.log("ERROR ===",error);
        });
  }
  getCountSonoAbdoSeg()
  {
    this._apiservice.getCountSonoAbdoSeg().subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      let ReportSonoAbdoSeg = res[0];
      this.SonoAbdoSeg = parseInt(ReportSonoAbdoSeg.resultado);
      },(error: any) => {
        console.log("ERROR ===",error);
      });
  }

  SumaTotalSonObito(a, b):number{
    return a + b
  }

  getCountSonbitoNoSeg()
  {
      this._apiservice.getCountSonbitoNoSeg().subscribe((res:any) => {
        console.log("SUCCESS ===",res);
        let ReportSonObitoNoSeg = res[0];
        this.SonoObitoNoSeg = parseInt(ReportSonObitoNoSeg.resultado);
        },(error: any) => {
          console.log("ERROR ===",error);
        });
  }
  getCountSonObitoSeg()
  {
    this._apiservice.getCountSonObitoSeg().subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      let ReportSonObitoSeg = res[0];
      this.SonoObitoSeg = parseInt(ReportSonObitoSeg.resultado);
      },(error: any) => {
        console.log("ERROR ===",error);
      });
  }
  SumaTotalAseg(a, b):number{
    return a + b
  }

  SumaTotalNoAseg(a, b):number{
    return a + b
  }

  SumaTotal(a, b, c, d):number{
    return a + b + c + d
  }


}
