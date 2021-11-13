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
  estado_sonografia: '2';
  sonoObito = {
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
  sonoAbdominal = {
    nombre: '',
    apellido: '',
    edad: '',
    morfologia: '',
    lesionesFocales: '',
    medidaHigado: '',
    viasBiliares: '',
    vesiculaForma: '',
    vesiculaSituacion: '',
    vesiculaPared: '',
    vesiculaLongitud: '',
    vesiculaAncho: '',
    vesiculaLitos: '',
    vesiculaPolipos: '',
    pancreasForma: '',
    pancreasSituacion: '',
    pancreasCabeza: '',
    pancreasCuerpo: '',
    pancreasCola: '',
    pancreasContorno: '',
    pancreasEcogenicidad: '',
    rinondVisualiza: '',
    rinondForma: '',
    rinondContornos: '',
    rinondRelacion: '',
    rinondEvidencia: '',
    rinondLitiasis: '',
    rinondTumoraciones: '',
    rinonlVisualiza: '',
    rinonlForma: '',
    rinonlContornos: '',
    rinonlRelacion: '',
    rinonlEvidencia: '',
    rinonlLitiasis: '',
    rinonlTumoraciones: '',
    bazoVisualiza: '',
    bazoForma: '',
    bazoEcotextura: '',
    bazoTumoraciones: '',
    bazoLongitud: '',
    bazoAncho: '',
    aortaDiametro: '',
    aortaValor:'',
    conclusiones: '',
     
  }
  //variables que determinan si mostrar los formularios o no
  showObito: boolean;
  showAbdominal: boolean;
  showTransV: boolean;
  showBazo: boolean;
  toggleBazo:boolean = false;


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
     this.sonoObito.nombre = sonografia.nombre_paciente;
     this.sonoObito.apellido = sonografia.apellido_paciente;
     this.sonoObito.edad = sonografia.EDAD;
     this.sonoAbdominal.nombre = sonografia.nombre_paciente;
     this.sonoAbdominal.apellido = sonografia.apellido_paciente;
     this.sonoAbdominal.edad = sonografia.EDAD;
     
      }, (err:any)=>{
   console.log("ERROR", err)
 })
 
}
// usa el toggle para mostrar u ocultar los campos de bazo
Bazo(bazo){
   
if (this.toggleBazo == true) {
  this.showBazo = true;
  
}
else{ this.showBazo = false}
}

 
 updateSonografia()
{
 let data = {
   
   estado_sonografia: 2,
  
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
 async createObitoPdf() {
  var obitoDefinition: any = {
    pageSize: 'LETTER',
    content:[

      { text: 'CENTRO  DIAGNOSTICO SAN FERNANDO DE MONTECRISTI \n\n', style: 'header',alignment: 'center' },

      {
        text:  [
               {text: new Date().toLocaleDateString(), alignment: 'left'}, '\n\n',
               ]
      },

      {
        text:  [
               {text: 'PACIENTE:', style: 'subheader'}, this.sonoObito.nombre +' '+ this.sonoObito.apellido, '\n\n',
              ]
      },
      {
        text:  [
               {text: 'EDAD:', style: 'subheader'}, this.sonoObito.edad,'\n\n',
              ]
      },
      {
        image: await this.getBase64ImageFromURL(
          "https://images.pexels.com/photos/209640/pexels-photo-209640.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300"

        )
      } , 

      { text: 'MEDICO: A QUIEN CORRESPONDA', style: 'subheader'},

      { text: 'SONOGRAFIA OBSTETRICA:', style: 'subheader', alignment: 'center' },  
      { text: 'ESTUDIO REALIZADO POR VIA ABDOMINAL, CON TRANSDUCTOR DE 3.5MHZ ENCONTRANDO AL MOMENTO DEL ESTUDIO:\n\n'},     

    {
      text:  [
				     {text: 'FETO:', style: 'subheader'}, this.sonoObito.feto,
			      ]
    },

    {
      text:  [
             { text: 'POSICION:', style: 'subheader'}, this.sonoObito.posicion,
			      ]
    },

    {
      text:  [
             { text: 'DORSO:', style: 'subheader'}, this.sonoObito.dorso,'\n\n',
			      ]
    },

    {
      text:  [
             { text: 'PESO:', style: 'subheader'}, this.sonoObito.peso,{ text: 'g'}
			      ]    
    },

    {
      text:  [
             { text: 'COLUMNA '}, this.sonoObito.columna,
             { text: ', ESTOMAGO '}, this.sonoObito.estomago,
             { text: ', RIÑONES '}, this.sonoObito.rinones,
             { text: ', VEJIGA '}, this.sonoObito.vejiga,
             { text: ', CABEZA '}, this.sonoObito.cabeza,'\n\n',
			      ]    
    },

    {
      text:  [
              { text: 'FCF:', style: 'subheader' }, this.sonoObito.fcf,'\n\n',{text:'L/M'}
			      ]
    },

    {
      text:  [
             { text: 'PLACENTA:', style: 'subheader' }, this.sonoObito.placenta,
			      ]
    },

    {
      text:  [
        { text: 'GRADO:', style: 'subheader'}, this.sonoObito.grado, 
			      ]
    },

    {
      text:  [
        { text: 'CORDON UMBILICAL:', style: 'subheader'}, this.sonoObito.cordon,
			      ]
    },

    {
      text:  [
        { text: 'LIQUIDO AMNIOTICO:', style: 'subheader'}, this.sonoObito.liquido,
			      ]
    },

    {
      text:  [
        { text: 'CERVIX:', style: 'subheader'}, this.sonoObito.cervix, '\n\n',
			      ]
    },




    {
      text:  [
              { text: 'SEXO:', style: 'subheader' }, this.sonoObito.sexo,'\n\n',
			      ]
    },
    
     { text: 'CONCLUSIONES:', style: 'subheader' }, this.sonoObito.conclusiones,'\n\n',
			      
      {
        ul: [
         
          
           ]
      },

      {
        text:  [
                 { text: 'FPP:', style: 'subheader'}, this.sonoObito.fpp
              ]
      },
      { text: 'DRA. ROSA M. GRAJALES', style: 'header',alignment: 'center' },
      { text: 'MEDICO SONOGRAFISTA',alignment: 'center' }
      
    ],
    styles: {
      header: {
        fontSize: 14,
        bold: true,
      },
      subheader: {
        fontSize: 12,
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
  this.pdfObj = pdfMake.createPdf(obitoDefinition);
}

printObitoPdf() {
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
    this.updateSonografia();
    
}


createAbdominalPdf() {
  var abdominalDefinition: any = {
    pageSize: 'LETTER',
    content:[

      { text: 'CENTRO  DIAGNOSTICO SAN FERNANDO DE MONTECRISTI \n\n', style: 'header',alignment: 'center' },

      {
        text:  [
               {text: new Date().toLocaleDateString(), alignment: 'left'}, '\n\n',
               ]
      },
           {
        text:  [
               {text: 'PACIENTE:', style: 'subheader'}, this.sonoAbdominal.nombre +' '+ this.sonoAbdominal.apellido, '\n\n',
              ]
      },

      {
        text:  [
               {text: 'EDAD:', style: 'subheader'}, this.sonoAbdominal.edad,'\n\n',
              ]
      },

      { text: 'MEDICO: A QUIEN CORRESPONDA', style: 'subheader'},

      { text: 'SONOGRAFIA ABDOMINAL:', style: 'subheader', alignment: 'center' },  
      { text: 'ESTIMADO DR., SE REALIZARON CORTES ULTRASONOGRAFICOS  A SU PACIENTE  EN EL SISTEMA HEPATOBILIAR , EN TIEMPO  REAL SECTORIAL CON TRANSDUCTOR DE 3.5 MHz DONDE SE ENCUENTRA AL MOMENTO DEL ESTUDIO LO SIGUIENTE:\n\n'},     

    {
      text:  [
				     {text: 'HIGADO:', style: 'subheader'}, {text:  [
              { text: 'SE OBSERVA  EN SITUACION ADECUADA CON MORFOLOGIA  '}, this.sonoAbdominal.morfologia,
              { text: ', LESIONES FOCALES '}, this.sonoAbdominal.lesionesFocales,
              { text: ', EL HIGADO MIDE EN SU EJE MAYOR '}, this.sonoAbdominal.medidaHigado,{text:'mm, '},
              { text: 'Y VIAS BILIARES INTRAHEPATICAS '}, this.sonoAbdominal.viasBiliares,
              '\n\n',
             ]  }  
			      ]
    },

    {
      text:  [
				     {text: 'VESICULA BILIAR:', style: 'subheader'}, {text:  [
              { text: ''}, this.sonoAbdominal.vesiculaForma,
              { text: ', SITUACION '}, this.sonoAbdominal.vesiculaSituacion,
              { text: ', PARED '}, this.sonoAbdominal.vesiculaPared,{text:'mm, '},
              { text: 'LONGITUD '}, this.sonoAbdominal.vesiculaLongitud,{text:'mm, '},
              { text: 'ANCHO '}, this.sonoAbdominal.vesiculaAncho,{text:'mm, '},
              { text: 'LITOS '}, this.sonoAbdominal.vesiculaLitos,
              { text: ', POLIPOS '}, this.sonoAbdominal.vesiculaPolipos,
              '\n\n',
             ]  }  
			      ]
    },

    {
      text:  [
				     {text: 'PANCREAS:', style: 'subheader'}, {text:  [
              { text: ''}, this.sonoAbdominal.pancreasForma,
              { text: ', CABEZA '}, this.sonoAbdominal.pancreasCabeza,{text:'mm, '},
              { text: 'CUERPO '}, this.sonoAbdominal.pancreasCuerpo,{text:'mm, '},
              { text: 'COLA '}, this.sonoAbdominal.pancreasCola,{text:'mm, '},
              { text: ',SITUACION Y CONTORNOS '}, this.sonoAbdominal.pancreasContorno,
              { text: 'LA ECOGENICIDAD DEL PARENQUIMA ES '}, this.sonoAbdominal.pancreasEcogenicidad,
              '\n\n',
             ]  }  
			      ]
    },

    {
      text:  [
				     {text: 'RIÑON DERECHO:', style: 'subheader'}, {text:  [
              { text: 'SITUACION '}, this.sonoAbdominal.rinondVisualiza,
              { text: ',DE FORMA '}, this.sonoAbdominal.rinondForma,
              { text: ',CONTORNO '}, this.sonoAbdominal.rinondContornos,
              { text: 'LA RELACION CORTEZA-MEDULA/SENO RENAL SE ENCUENTRA '}, this.sonoAbdominal.rinondRelacion,
              this.sonoAbdominal.rinondEvidencia,{text:'EXISTE EVIDENCIA DE DILATACION PIELO-CALICIAL'},
              { text: ', LITIASIS'}, this.sonoAbdominal.rinondLitiasis,
              { text: ', TUMORACIONES '}, this.sonoAbdominal.rinondTumoraciones,
              '\n\n',
             ]  }  
			      ]
    },
    
    {
      text:  [
				     {text: 'RIÑON IZQUIERDO:', style: 'subheader'}, {text:  [
              { text: 'SITUACION'}, this.sonoAbdominal.rinonlVisualiza,
              { text: ',DE FORMA'}, this.sonoAbdominal.rinonlForma,
              { text: ',CONTORNO'}, this.sonoAbdominal.rinonlContornos,
              { text: 'LA RELACION CORTEZA-MEDULA/SENO RENAL SE ENCUENTRA'}, this.sonoAbdominal.rinonlRelacion,
              this.sonoAbdominal.rinonlEvidencia,{text:'EXISTE EVIDENCIA DE DILATACION PIELO-CALICIAL'},
              { text: ', LITIASIS'}, this.sonoAbdominal.rinonlLitiasis,
              { text: ', TUMORACIONES '}, this.sonoAbdominal.rinonlTumoraciones,
              '\n\n',
             ]  }  
			      ]
    },

    {
      text:  [
				     {text: 'EL BAZO:', style: 'subheader'}, {text:  [
              { text: 'SITUACION'}, this.sonoAbdominal.bazoVisualiza,
              { text: ',DE FORMA'}, this.sonoAbdominal.bazoForma,
              { text: ',ECOTEXTURA'}, this.sonoAbdominal.bazoEcotextura,
              { text: ', TUMORACIONES'}, this.sonoAbdominal.bazoTumoraciones,
              { text: ', LONGITUD: '}, this.sonoAbdominal.bazoLongitud,{text:'mm, '},
              { text: ', ANCHO: '}, this.sonoAbdominal.bazoAncho,{text:'mm '},
              '\n\n',
             ]  }  
			      ]
    },

    {
      text:  [
				     {text: 'AORTA ABDOMINAL:', style: 'subheader'}, {text:  [
              { text: 'DE DIAMETRO '}, this.sonoAbdominal.aortaDiametro,
              { text: ', VALOR DE '}, this.sonoAbdominal.aortaValor,{text:'mm. '},
              '\n\n',
             ]  }  
			      ]
    },{ text: 'CONCLUSIONES GENERALES:', style: 'subheader' }, this.sonoAbdominal.conclusiones,'\n\n',





      { text: 'DRA. ROSA M. GRAJALES', style: 'header',alignment: 'center' },
      { text: 'MEDICO SONOGRAFISTA',alignment: 'center' }
      
    ],
    styles: {
      header: {
        fontSize: 14,
        bold: true,
      },
      subheader: {
        fontSize: 12,
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
  this.pdfObj = pdfMake.createPdf(abdominalDefinition);
}

printAbdominalPdf() {
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
    this.updateSonografia();
    
}





//metodo con condiciones que muestra o oculta los formularios.

 setVi(){
   
  if (this.tipoSonografia==1) {

    this.showObito=true; 
    this.showAbdominal=false;
    this.showTransV=false;
  }
   else if (this.tipoSonografia==2) {

    this.showAbdominal=true;
    this.showTransV=false;
    this.showObito=false; 
  }
   else if (this.tipoSonografia==3) {

    this.showTransV=true;
    this.showAbdominal=false;
    this.showObito=false; 
  }
  else { this.presentToastError('No ha seleccionado el tipo de sonografia!')
  
  }


 }
 getBase64ImageFromURL(url) {
  return new Promise((resolve, reject) => {
    var img = new Image();
    img.setAttribute("crossOrigin", "anonymous");
    img.onload = () => {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      var dataURL = canvas.toDataURL("image/png");
      resolve(dataURL);
    };
    img.onerror = error => {
      reject(error);
    };
    img.src = url;
  });
}
}

