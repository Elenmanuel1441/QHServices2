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

  constructor(private router: Router,
    private afAuth: AuthService,
    private _apiservice: ApiService,)
     {
      this. getCountSonoAbdoNoAseg();
      setInterval(() => this.getCountSonoAbdoNoAseg(), 10000);

      this.getCountSonoAbdoSeg();
      setInterval(() => this.getCountSonoAbdoSeg(), 10000);
   }

   ReportSonoAbdoNoSeg: any = [];
   ReportSonoAbdoSeg: any = [];
   SonoAbdoNoSeg: number = 0;
   SonoAbdoSeg: number = 0;
 

  ngOnInit() {
    this. getCountSonoAbdoNoAseg();
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

  

//   sumArray(SonoAbdoNoSeg, SonoAbdoSeg) {
//     var SumaTotalSonoAbdo = [];
//     for (var i = 0; i < Math.max(SonoAbdoNoSeg.length, SonoAbdoSeg.length); i++) {
//       SumaTotalSonoAbdo.push((SonoAbdoNoSeg[i] || 0) + (SonoAbdoSeg[i] || 0));
//     }
//     return SumaTotalSonoAbdo;
// }

}
