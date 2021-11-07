import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../api.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-sonografia-update',
  templateUrl: './sonografia-update.page.html',
  styleUrls: ['./sonografia-update.page.scss'],
})
export class SonografiaUpdatePage implements OnInit {

  id_col_sonografia: any;
  estado_sonografia: any;
  letterObject = {
    nombre: '',
    apellido: '',
    edad: '',
    feto: '',
    posicion: '',
    dorso: '',
    peso: '',
    columna: '',
    estomago: '',
    rinones: '',
    vejiga: '',
    cabeza: '',
    fcf: '',
    placenta: '',
    grado: '',
    cordon: '',
    liquido: '',
    cervix: '',
    sexo: '',
    conclusiones: '',
    fpp: ''  
  }

  //variables que determinan si mostrar los formularios o no
  showObito: boolean;
  showVesi: boolean;
  showTransV: boolean;


  pdfObj = null;
  //variable que me dice el tipo de sonografia
  tipoSonografia: any;

 constructor(
  private route: ActivatedRoute,
  private router: Router,
  private _apiservice: ApiService,
  public toastController: ToastController

 ) { 

   this.route.params.subscribe((param:any) =>{
     this.id_col_sonografia = param.id_col_sonografia;
     console.log(this.id_col_sonografia);
     this.getSonografia(this.id_col_sonografia);
   })
 }

 ngOnInit() {

  
 }
 getSonografia(id_col_sonografia)
 {
   this._apiservice.getSonografia(id_col_sonografia).subscribe((res:any)=>{
     console.log("SUCCESS",res);
     let sonografia = res[0];
     this.estado_sonografia = sonografia.estado_sonografia;
     this.letterObject.nombre = sonografia.nombre_paciente;
     this.letterObject.apellido = sonografia.apellido_paciente;
     this.letterObject.edad = sonografia.EDAD;
     
      }, (err:any)=>{
   console.log("ERROR", err)
 })
 
}
 
 updateSonografia()
{
 let data = {
   
   estado_sonografia: this.estado_sonografia,
  
   }
   this._apiservice.updateSonografia(this.id_col_sonografia,data).subscribe((res:any)=>{
     console.log("SUCCESS",res);
     this.presentToast('Liberado exitosamente!');
     this.router.navigateByUrl('/sonografia');
     
 }, (err:any)=>{
  this.presentToastError('Error al liberar!');
   console.log("ERROR", err);
   
 })
}

async presentToastWithOptions() {
  const toast = await this.toastController.create({
    header: 'Toast header',
    message: 'Click to Close',
    position: 'top',
    buttons: [
      {
        side: 'start',
        icon: 'star',
        text: 'Favorite',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Done',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });

}
async presentToast(mensaje: string) {
  const toast = await this.toastController.create({
    message: mensaje,
    duration: 1500,
    color: "success",
    cssClass: 'toastAdd',
    position: "bottom",
    
  });
  toast.present();
}

async presentToastError(mensaje: string) {
  const toast = await this.toastController.create({
    message: mensaje,
    duration: 1500,
    color: "danger",
    cssClass: 'toastAdd',
    position: "bottom",
    
  });
  toast.present();
}
 //variable formato del pdf
createPdf() {
  var docDefinition = {
    content: [
      { text: 'CENTRO DIAGNOSTICO MONTECRISTI', style: 'header',alignment: 'center' },
      { text: new Date().toTimeString(), alignment: 'right' },
      { text: 'ESTUDIO REALIZADO POR VIA ABDOMINAL, CON TRANSDUCTOR DE 3.5MHZ ENCONTRANDO AL MOMENTO DEL ESTUDIO:', style: 'subheader' },
      
      
      { text: 'PACIENTE:', style: 'subheader' },
      { text: this.letterObject.nombre } ,
       

      { text: 'EDAD:', style: 'subheader' },
      this.letterObject.edad,


      { text: 'FETO:', style: 'subheader' },
      this.letterObject.feto,

      { text: 'POSICION:', style: 'subheader' },
      this.letterObject.posicion,

      { text: 'DORSO:', style: 'subheader' },
      this.letterObject.dorso,




      { text: 'PESO:', style: 'subheader', },
      this.letterObject.peso,

      { text: 'COLUMNA:', style: 'subheader' },
      this.letterObject.columna,

      { text: 'ESTOMAGO:', style: 'subheader' },
      this.letterObject.estomago,


      { text: 'RIÑONES:', style: 'subheader' },
      this.letterObject.rinones,


      { text: 'VEJIGA:', style: 'subheader' },
      this.letterObject.vejiga,



      { text: 'CABEZA:', style: 'subheader' },
      this.letterObject.cabeza,

      { text: 'FCF:', style: 'subheader' },
      this.letterObject.fcf,


      { text: 'PLACENTA:', style: 'subheader' },
      this.letterObject.placenta,
      { text: 'GRADO:', style: 'subheader' },
      this.letterObject.grado,

      { text: 'CORDON UMBILICAL:', style: 'subheader' },
      this.letterObject.cordon,


      { text: 'LIQUIDO AMNIOTICO:', style: 'subheader' },
      this.letterObject.liquido,

      
           
      { text: 'CERVIX:', style: 'subheader' },
      this.letterObject.cervix,


      { text: 'SEXO:', style: 'subheader' },
      this.letterObject.sexo,

  
      
      {
        ul: [
          { text: 'CONCLUSIONES:', style: 'subheader' },{ text: this.letterObject.conclusiones, style: 'story', margin: [0, 20, 0, 20] },
          { text: 'FPP:', style: 'subheader' },
      this.letterObject.fpp
        ]
      }
      
      
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
      },
      subheader: {
        fontSize: 14,
        bold: true,
        margin: [0, 15, 0, 0]
      },
      story: {
        italic: true,
        alignment: 'center',
        width: '50%',
      }
    }
  }
  this.pdfObj = pdfMake.createPdf(docDefinition);
}

printPdf() {
  /* if (this.plt.is('cordova')) {
    this.pdfObj.getBuffer((buffer) => {
      var blob = new Blob([buffer], { type: 'application/pdf' });

      // Save the PDF to the data Directory of our App
      this.file.writeFile(this.file.dataDirectory, 'myletter.pdf', blob, { replace: true }).then(fileEntry => {
        // Open the PDf with the correct OS tools
        this.fileOpener.open(this.file.dataDirectory + 'myletter.pdf', 'application/pdf');
      })
    });
  } else {*/
    // On a browser simply use download!
    this.pdfObj.print();
  
}
//metodo con condiciones que muestra o oculta los formularios.
 
 setVi(){
   
  if (this.tipoSonografia==1) {

    this.showObito=true; 
    this.showVesi=false;
    this.showTransV=false;
  }
   else if (this.tipoSonografia==2) {

    this.showVesi=true;
    this.showTransV=false;
    this.showObito=false; 
  }
   else if (this.tipoSonografia==3) {

    this.showTransV=true;
    this.showVesi=false;
    this.showObito=false; 
  }
  else { this.presentToastError('No ha seleccionado el tipo de sonografia!')
  
  }


 }
}

