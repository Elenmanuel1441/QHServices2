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
  SonoAbdoNoSeg: any;

  ReportSonoAbdoSeg: any = [];
  SonoAbdoSeg: any;


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

  getCountSonoAbdoNoAseg()
  {
      this._apiservice.getCountSonoAbdoNoAseg().subscribe((res:any) => {
        console.log("SUCCESS ===",res);
        let ReportSonoAbdoNoSeg = res[0];
        this.SonoAbdoNoSeg = ReportSonoAbdoNoSeg.resultado;
        },(error: any) => {
          console.log("ERROR ===",error);
        });
  }
  getCountSonoAbdoSeg()
  {
    this._apiservice.getCountSonoAbdoSeg().subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      let ReportSonoAbdoSeg = res[0];
      this.SonoAbdoSeg = ReportSonoAbdoSeg.resultado;
      },(error: any) => {
        console.log("ERROR ===",error);
      });
  }
}
