import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../api.service';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit {


  title = 'angular-app';
  fileNameSono= 'Reporte Sonografía Abdominal.xlsx';
  fileNameLab= 'Reporte de Laboratorio.xlsx';
  fileNameAnalisis= 'Reporte de Análisis.xlsx';
  condiccion: number = 0;

  //title = 'angulardatatables';
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

      this.getCountLabAseNaseg();
      setInterval(() => this.getCountLabAseNaseg(), 10000);

      this.getCountAnalisisAseNaseg();
      setInterval(() => this.getCountAnalisisAseNaseg(), 10000);

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

  //Report laborratorio Aseg y No Aseg
  ReportLabAsegNAseg: any = [];
  LabAseg: number = 0;
  LabNoAseg: number = 0;

   //Report laborratorio Aseg y No Aseg sobre los analisis
   ReportAnalisissegNAseg: any = [];
   LabOrinaAseg: number = 0;
   LabOrinaNoAseg: number = 0;
   LabTipAseg: number = 0;
   LabTipNoAseg: number = 0;
   LabCropoAseg: number = 0;
   LabCropoNoAseg: number = 0;
   LabCobidAseg: number = 0;
   LabCobidNoAseg: number = 0;




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
  //estos son los calculos para realizar la tabla de sonografia reportes
  SumaTotalAseg(a, b):number{
    return a + b
  }

  SumaTotalNoAseg(a, b):number{
    return a + b
  }

  SumaTotal(a, b, c, d):number{
    return a + b + c + d
  }
//Exportar a excel la tabla de sonografia
  exportexcelSono(): void
  {
    /* pass here the table id */
    let element = document.getElementById('tabla_sono');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileNameSono);
 
  }
  //Exportar a excel la tabla de laboratorio
  exportexcelLab(): void
  {
    /* pass here the table id */
    let element = document.getElementById('tabla_laboratorio');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileNameLab);
 
  }

   //Exportar a excel la tabla de analisis

   exportexcelAnalisis(): void
  {
    /* pass here the table id */
    let element = document.getElementById('tabla_Analisis');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileNameAnalisis);
 
  }

//estos son los calculos para realizar la tabla de Laboratorio reportes
  getCountLabAseNaseg()
  {

    this._apiservice.getCountLabAseNaseg().subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      let ReportLabAsegNAseg = res[0];
      this.LabAseg = parseInt(ReportLabAsegNAseg.Name_exp_1 );
      this.LabNoAseg = parseInt(ReportLabAsegNAseg.Name_exp_2);
      },(error: any) => {
        console.log("ERROR ===",error);
      });

  }

  //calculo para los resultados de la tabla laboratorio

  SumaTotalLabAseg(a, b):number{
    return a + b
  }

  SumaTotalLabNoAseg(a, b):number{
    return a + b
  }
  SumaTotalLabMuestrasTomadas(a, b):number{
    return a + b
  }
  SumaTotalLabReferido(a, b):number{
    return a + b
  }

  SumaTotalLaboratorio(a, b, c, d):number{
    return a + b + c + d
  }

  //estos son los calculos para realizar la tabla de Laboratorio reportes y traser los analisis
  getCountAnalisisAseNaseg()
  {
    this._apiservice.getCountAnalisisAseNaseg().subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      let ReportAnalisissegNAseg = res[0];
      this.LabOrinaAseg = parseInt(ReportAnalisissegNAseg.OrinaAseg);
      this.LabOrinaNoAseg = parseInt(ReportAnalisissegNAseg.OrinaNoAseg);
      this.LabTipAseg = parseInt(ReportAnalisissegNAseg.TipAseg);
      this.LabTipNoAseg = parseInt(ReportAnalisissegNAseg.TipNoAseg);
      this.LabCropoAseg = parseInt(ReportAnalisissegNAseg.CropAseg);
      this.LabCropoNoAseg = parseInt(ReportAnalisissegNAseg.CropNoAseg);
      this.LabCobidAseg = parseInt(ReportAnalisissegNAseg.COVIDAseg);
      this.LabCobidNoAseg = parseInt(ReportAnalisissegNAseg.COVIDNoAseg);
      },(error: any) => {
        console.log("ERROR ===",error);
      });
  }

   //calculo para los resultados de la tabla laboratorio Analisis

   SumaLabAnaliOrina(a, b):number{
    return a + b
  }
  SumaLabAnaliTipi(a, b):number{
    return a + b
  }
  SumaLabAnaliCropo(a, b):number{
    return a + b
  }
  SumaLabAnaliCobid(a, b):number{
    return a + b
  }
  SumaTotalLabAnaliAseg(a, b, c, d):number{
    return a + b + c + d
  }

  SumaTotalLabAnaliNoAseg(a, b, c, d):number{
    return a + b + c + d
  }

  SumaTotalLabAnalisi(a, b, c, d, e, f, g, h):number{
    return a + b + c + d + e + f + g + h
  }
  
  
  getDashboard(): void{
    this.router.navigateByUrl('/admin/dashboard?type=administrador');
  }

}
