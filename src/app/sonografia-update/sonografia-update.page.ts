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
  id_paciente:any;
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
  showBazo: boolean = true;
  showVesicula: boolean=true;
  showRinond: boolean = true;
  showRinonl:boolean = true;
  toggleBazo:boolean = true;
  toggleVesicula: boolean = true;
  toggleRinond: boolean = true;
  toggleRinonl: boolean = true;
  


  pdfObj = null;
  //variable que me dice el tipo de sonografia
  tipoSonografia: any;

 constructor(
  private route: ActivatedRoute,
  private router: Router,
  public _apiservice: ApiService,
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
 addSonografiaObstetrica()
  {
    let data = {
  id_paciente: this.id_paciente,
 sonoObitoNombre : this.sonoObito.nombre,
 sonoObitoApellido :this.sonoObito.apellido,
 sonoObitoEdad :this.sonoObito.edad,
 sonoObitoFeto :this.sonoObito.feto,
 sonoObitoPosicion :this.sonoObito.posicion,
 sonoObitoDorso :this.sonoObito.dorso,
 sonoObitoPeso :this.sonoObito.peso,
 sonoObitoColumna :this.sonoObito.columna,
 sonoObitoEstomago :this.sonoObito.estomago,
 sonoObitoRinones :this.sonoObito.rinones,
 sonoObitoVejiga :this.sonoObito.vejiga,
 sonoObitoCabeza :this.sonoObito.cabeza,
 sonoObitoFcf :this.sonoObito.fcf,
 sonoObitoPlacenta :this.sonoObito.placenta,
 sonoObitoGrado :this.sonoObito.grado,
 sonoObitoCordon :this.sonoObito.cordon,
 sonoObitoLiquido :this.sonoObito.liquido, 
 sonoObitoCervix :this.sonoObito.cervix,
 sonoObitoSexo :this.sonoObito.sexo,
 sonoObitoConclusiones :this.sonoObito.conclusiones,
 sonoObitoFpp :this.sonoObito.fpp,
 
 
}
      this._apiservice.addSonografiaObstetrica(data).subscribe((res:any) => {
        console.log("SUCCESS ===",res);
        this.presentToast('Guardado exitosamente!');
      
      },(error: any) => {
        this.presentToastErrorADD('Error al guardar!');
        console.log("Error ===",error);
      })
  }
//AÑADE A LA BASE DE DATOS LA SONOGRAFIA ABDOMINAL
  addSonografiaAbdominal()
  {
    let data = {
  id_paciente: this.id_paciente,
 sonoAbdominalNombre: this.sonoAbdominal.nombre,
 sonoAbdominalApellido: this.sonoAbdominal.apellido,
 sonoAbdominalEdad: this.sonoAbdominal.edad,
 sonoAbdominalMorfologia: this.sonoAbdominal.morfologia,
 sonoAbdominalLesionesFocales: this.sonoAbdominal.lesionesFocales,
 sonoAbdominalMedidaHigado: this.sonoAbdominal.medidaHigado,
 sonoAbdominalViasBiliares: this.sonoAbdominal.viasBiliares,
 sonoAbdominalVesiculaForma: this.sonoAbdominal.vesiculaForma,
 sonoAbdominalVesiculaSituacion: this.sonoAbdominal.vesiculaSituacion,
 sonoAbdominalVesiculaPared: this.sonoAbdominal.vesiculaPared,
 sonoAbdominalVesiculaLongitud: this.sonoAbdominal.vesiculaLongitud,
 sonoAbdominalVesiculaAncho: this.sonoAbdominal.vesiculaAncho,
 sonoAbdominalVesiculaLitos: this.sonoAbdominal.vesiculaLitos,
 sonoAbdominalVesiculaPolipos: this.sonoAbdominal.vesiculaPolipos,
 sonoAbdominalPancreasForma: this.sonoAbdominal.pancreasForma,
 sonoAbdominalPancreasSituacion: this.sonoAbdominal.pancreasSituacion,
 sonoAbdominalPancreasCabeza: this.sonoAbdominal.pancreasCabeza,
 sonoAbdominalPancreasCuerpo: this.sonoAbdominal.pancreasCuerpo,
 sonoAbdominalPancreasCola: this.sonoAbdominal.pancreasCola,
 sonoAbdominalPancreasContorno: this.sonoAbdominal.pancreasContorno,
 sonoAbdominalPancreasEcogenicidad: this.sonoAbdominal.pancreasEcogenicidad,
 sonoAbdominalRinonDVisualiza: this.sonoAbdominal.rinondVisualiza,
 sonoAbdominalRinonDForma: this.sonoAbdominal.rinondForma,
 sonoAbdominalRinonDContornos: this.sonoAbdominal.rinondContornos,
 sonoAbdominalRinonDRelacion: this.sonoAbdominal.rinondRelacion,
 sonoAbdominalRinonDEvidencia: this.sonoAbdominal.rinondEvidencia,
 sonoAbdominalRinonDLitiasis: this.sonoAbdominal.rinondLitiasis,
 sonoAbdominalRinonDTumoraciones: this.sonoAbdominal.rinondTumoraciones,
 sonoAbdominalRinonLVisualiza: this.sonoAbdominal.rinonlVisualiza,
 sonoAbdominalRinonLForma: this.sonoAbdominal.rinonlForma,
 sonoAbdominalRinonLContornos: this.sonoAbdominal.rinonlContornos,
 sonoAbdominalRinonLRelacion: this.sonoAbdominal.rinonlRelacion,
 sonoAbdominalRinonLEvidencia: this.sonoAbdominal.rinonlEvidencia,
 sonoAbdominalRinonLLitiasis: this.sonoAbdominal.rinonlLitiasis,
 sonoAbdominalRinonLTumoraciones: this.sonoAbdominal.rinonlTumoraciones,
 sonoAbdominalBazoVisualiza: this.sonoAbdominal.bazoVisualiza,
 sonoAbdominalBazoForma: this.sonoAbdominal.bazoForma,
 sonoAbdominalBazoEcotextura: this.sonoAbdominal.bazoEcotextura,
 sonoAbdominalBazoTumoraciones: this.sonoAbdominal.bazoTumoraciones,
 sonoAbdominalBazoLongitud: this.sonoAbdominal.bazoLongitud,
 sonoAbdominalBazoAncho: this.sonoAbdominal.bazoAncho,
 sonoAbdominalAortaDiametro: this.sonoAbdominal.aortaDiametro,
 sonoAbdominalAortaValor: this.sonoAbdominal.aortaValor,
 sonoAbdominalConclusiones: this.sonoAbdominal.conclusiones,
}
      this._apiservice.addSonografiaAbdominal(data).subscribe((res:any) => {
        console.log("SUCCESS ===",res);
        this.presentToast('Guardado exitosamente!');
      
      },(error: any) => {
        this.presentToastErrorADD('Error al guardar!');
        console.log("Error ===",error);
      })
  }


 getSonografia(id_col_sonografia)
 {
   this._apiservice.getSonografia(id_col_sonografia).subscribe((res:any)=>{
     console.log("SUCCESS",res);
     let sonografia = res[0];
     this.id_paciente = sonografia.id_paciente;
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
bazo(){
   
if (this.toggleBazo == true) {
  this.showBazo = true;
  
}
else if( this.toggleBazo == false ){ 
  this.showBazo = false;
}
console.log(this.showBazo)
}
rinonl(){
  if (this.toggleRinonl== false){
    this.showRinonl =false;
      }
      else if (this.toggleRinonl == true){
        this.showRinonl = true; 
      }
}
rinond(){
  if (this.toggleRinond== false){
    this.showRinond =false;
      }
      else if (this.toggleRinond == true){
        this.showRinond = true; 
      }
    
}
vesicula(){
  if (this.toggleVesicula== false){
    this.showVesicula =false;
      }
      else if (this.toggleVesicula == true){
        this.showVesicula  = true; 
      }
}
 
 
 updateSonografia()
{
 let data = {
   
   estado_sonografia: 2,
  
   }
   this._apiservice.updateSonografia(this.id_col_sonografia,data).subscribe((res:any)=>{
     console.log("SUCCESS",res);
     this.presentToast('Liberado exitosamente!');
     this.router.navigateByUrl('admin/sonografia');
     
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
//toast error al añadir
async presentToastErrorADD (mensaje: string) {
  const toast = await this.toastController.create({
    message: mensaje,
    duration: 1500,
    color: "danger",
    cssClass: 'toastEli',
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
      // {
      //   image: await this.getBase64ImageFromURL(
      //     "https://images.pexels.com/photos/209640/pexels-photo-209640.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300"

      //   )
      // } , 

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
    this.addSonografiaObstetrica();
    
}

//imprime todo el formulario
createAbdominalAllPdf() {
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
//no imprimi el riñon derecho c
createAbdominalno_RinondPdf() {
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
               {text: 'RIÑON DERECHO: NO SE VISUALIZA', style: 'subheader'},  
               {text: '', style: 'subheader'},  
               {text: '', style: 'subheader'},  
              ]
      },'\n\n',
    
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
//no imprime la vesicula c
createAbdominalno_VesiculaPdf() {
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
				     {text: 'VESICULA BILIAR: NO SE VISUALIZA', style: 'subheader'},  
             {text: '', style: 'subheader'},  
             {text: '', style: 'subheader'},  
			      ]
    },'\n\n',

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
//no imprime el riñon izquierdo c
createAbdominalno_RinonlPdf() {
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
//no imprime el bazo c
createAbdominalno_BazoPdf() {
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
				     {text: 'EL BAZO: NO SE VISUALIZA', style: 'subheader'},'\n\n',
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
//no imprime la vesicula,riñones y bazo C
createAbdominalno_vesicula_rinond_rinonl_bazoPdf() {
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
				     {text: 'VESICULA BILIAR: NO SE VISUALIZA', style: 'subheader'},  
             {text: '', style: 'subheader'},  
             {text: '', style: 'subheader'},  
             {text: '', style: 'subheader'},  
             {text: '', style: 'subheader'},  
			      ]
    },'\n\n',

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
				     {text: 'RIÑON DERECHO: NO SE VISUALIZA', style: 'subheader'},  
             {text: '', style: 'subheader'},  
             {text: '', style: 'subheader'},  
			      ]
    },'\n\n',
    
    {
      text:  [
				     {text: 'RIÑON IZQUIERDO: NO SE VISUALIZA', style: 'subheader'},  
             {text: '', style: 'subheader'},  
             {text: '', style: 'subheader'},  
			      ]
    },'\n\n',

    {
      text:  [
				     {text: 'BAZO: NO SE VISUALIZA', style: 'subheader'},  
             {text: '', style: 'subheader'},  
             {text: '', style: 'subheader'},  
             ]
    },'\n\n',

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
//no imprime vesicula ni riñones c
createAbdominalno_vesicula_rinond_rinonlPdf() {
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
				     {text: 'VESICULA BILIAR: NO SE VISUALIZA', style: 'subheader'},  
             {text: '', style: 'subheader'},  
             {text: '', style: 'subheader'},  
			      ]
    },'\n\n',

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
				     {text: 'RIÑON DERECHO: NO SE VISUALIZA', style: 'subheader'},  
             {text: '', style: 'subheader'},  
             {text: '', style: 'subheader'},  
			      ]
    },'\n\n',
    
    {
      text:  [
				     {text: 'RIÑON IZQUIERDO: NO SE VISUALIZA', style: 'subheader'},  
             {text: '', style: 'subheader'},  
             {text: '', style: 'subheader'},  
			      ]
    },'\n\n',

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
//no imprime bazo,vesicula,rinon derecho c
createAbdominalno_vesicula_rinond_bazoPdf() {
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
				     {text: 'VESICULA BILIAR: NO SE VISUALIZA', style: 'subheader'},  
             {text: '', style: 'subheader'},  
             {text: '', style: 'subheader'},  
			      ]
    },'\n\n',

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
				     {text: 'RIÑON DERECHO: NO SE VISUALIZA', style: 'subheader'},  
             {text: '', style: 'subheader'},  
             {text: '', style: 'subheader'},  
			      ]
    },'\n\n',
    
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
				     {text: 'BAZO: NO SE VISUALIZA', style: 'subheader'},  
             {text: '', style: 'subheader'},  
             {text: '', style: 'subheader'},  
			      ]
    },'\n\n',
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
//no imprime bazo,vesicula,rinon izquierdo c
createAbdominalno_vesicula_rinonl_bazoPdf() {
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
				     {text: 'VESICULA BILIAR: NO SE VISUALIZA', style: 'subheader'},  
             {text: '', style: 'subheader'},  
             {text: '', style: 'subheader'},  
			      ]
    },'\n\n',

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
				     {text: 'RIÑON IZQUIERDO: NO SE VISUALIZA', style: 'subheader'},  
             {text: '', style: 'subheader'},  
             {text: '', style: 'subheader'},  
			      ]
    },'\n\n',

    {
      text:  [
				     {text: 'BAZO: NO SE VISUALIZA', style: 'subheader'},  
             {text: '', style: 'subheader'},  
             {text: '', style: 'subheader'},  
			      ]
    },'\n\n',

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
//no imprime vesicula ni riñon derecho c
createAbdominalno_vesicula_rinondPdf() {
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
				     {text: 'VESICULA BILIAR: NO SE VISUALIZA', style: 'subheader'},  
             {text: '', style: 'subheader'},  
             {text: '', style: 'subheader'},  
			      ]
    },'\n\n',

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
				     {text: 'RIÑON DERECHO: NO SE VISUALIZA', style: 'subheader'},  
             {text: '', style: 'subheader'},  
             {text: '', style: 'subheader'},  
			      ]
    },'\n\n',
    
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

//no imprime vesicula ni riñon izquierdo c
createAbdominalno_vesicula_rinonlPdf() {
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
				     {text: 'VESICULA BILIAR: NO SE VISUALIZA', style: 'subheader'},  
             {text: '', style: 'subheader'},  
             {text: '', style: 'subheader'},  
			      ]
    },'\n\n',

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
				     {text: 'RIÑON IZQUIERDO: NO SE VISUALIZA', style: 'subheader'},  
             {text: '', style: 'subheader'},  
             {text: '', style: 'subheader'},  
			      ]
    },'\n\n',

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
//no imprime ni vesicula ni bazo c
createAbdominalno_vesicula_bazoPdf() {
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
				     {text: 'VESICULA BILIAR: NO SE VISUALIZA', style: 'subheader'},  
             {text: '', style: 'subheader'},  
             {text: '', style: 'subheader'},  
			      ]
    },'\n\n',

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
				     {text: 'BAZO: NO SE VISUALIZA', style: 'subheader'},  
             {text: '', style: 'subheader'},  
             {text: '', style: 'subheader'},  
			      ]
    },'\n\n',

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
//no imprime ni bazo ni riñon derecho c
createAbdominalno_bazo_rinondPdf() {
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
				     {text: 'RIÑON DERECHO: NO SE VISUALIZA', style: 'subheader'},  
             {text: '', style: 'subheader'},  
             {text: '', style: 'subheader'},  
			      ]
    },'\n\n',
    
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
				     {text: 'BAZO: NO SE VISUALIZA', style: 'subheader'},  
             {text: '', style: 'subheader'},  
             {text: '', style: 'subheader'},  
			      ]
    },'\n\n',

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
// no imprime bazo ni riñon izquierdo c
createAbdominalno_bazo_rinonlPdf() {
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
				     {text: 'RIÑON IZQUIERDO: NO SE VISUALIZA', style: 'subheader'},  
             {text: '', style: 'subheader'},  
             {text: '', style: 'subheader'},  
			      ]
    },'\n\n',

 
    {
      text:  [
				     {text: 'BAZO: NO SE VISUALIZA', style: 'subheader'},  
             {text: '', style: 'subheader'},  
             {text: '', style: 'subheader'},  
			      ]
    },'\n\n',
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
// no imprime riñones
createAbdominalno_rinoneslPdf() {
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
				     {text: 'RIÑON DERECHO: NO SE VISUALIZA', style: 'subheader'},  
             {text: '', style: 'subheader'},  
             {text: '', style: 'subheader'},  
             {text: '', style: 'subheader'},  
             {text: '', style: 'subheader'},  
			      ]
    },'\n\n',
    
    {
      text:  [
				     {text: 'RIÑON IZQUIERDO: NO SE VISUALIZA', style: 'subheader'},  
             {text: '', style: 'subheader'},  
             {text: '', style: 'subheader'},  
             {text: '', style: 'subheader'},  
             {text: '', style: 'subheader'},  
			      ]
    },'\n\n',
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

checkAbdominalPdf(){
//imprime todo
if (this.showRinonl== true && this.showVesicula == true && this.showBazo == true && this.showRinond == true) {
  this.createAbdominalAllPdf();
}
//no imprime la vesicula,riñones y bazo
else if (this.showRinonl== false && this.showVesicula == false && this.showBazo == false && this.showRinond == false) {
  this.createAbdominalno_vesicula_rinond_rinonl_bazoPdf();
} 
//no imprime vesicula ni riñones
else if (this.showRinonl== false && this.showVesicula == false && this.showBazo == true && this.showRinond == false) {
 this.createAbdominalno_vesicula_rinond_rinonlPdf(); 
}
//no imprime ni bazo ni vesicula
else if (this.showRinonl== true && this.showVesicula == false && this.showBazo == false && this.showRinond == true) {
  this.createAbdominalno_vesicula_bazoPdf();
}
//no imprime ni vesicula ni riñon derecho
else if (this.showRinonl== true && this.showVesicula == false && this.showBazo == true && this.showRinond == false) {
this.createAbdominalno_vesicula_rinondPdf();
}
//no imprime vesicula ni riñon izquierdo
else if (this.showRinonl== false && this.showVesicula == false && this.showBazo == true && this.showRinond == true) {
  this.createAbdominalno_vesicula_rinonlPdf();
}
//no imprime vesicula, bazo, riñon izquierdo
else if (this.showRinonl== false && this.showVesicula == false && this.showBazo == false && this.showRinond == true) {
  this.createAbdominalno_vesicula_rinonl_bazoPdf();
}
//no imprime vesicula ni bazo
else if (this.showRinonl== true && this.showVesicula == false && this.showBazo == false && this.showRinond == true) {
  this.createAbdominalno_vesicula_bazoPdf();

}
//no imprime riñones
else if (this.showRinonl== false && this.showVesicula == true && this.showBazo == true && this.showRinond == false) {
  
this.createAbdominalno_rinoneslPdf()


}
//no imprime riñon izquierdo
else if (this.showRinonl== false && this.showVesicula == true && this.showBazo == true && this.showRinond == true) {
  this.createAbdominalno_RinonlPdf();
}
//no imprime riñon derecho
else if (this.showRinonl== true && this.showVesicula == true && this.showBazo == true && this.showRinond == false) {
  this.createAbdominalno_RinondPdf();
}
//no imprime bazo
else if (this.showRinonl== true && this.showVesicula == true && this.showBazo == false && this.showRinond == true) {
  this.createAbdominalno_BazoPdf();
}
//no imprime vesicula
else if (this.showRinonl== true && this.showVesicula == false && this.showBazo == true && this.showRinond == true) {
  this.createAbdominalno_VesiculaPdf();
}
// no imprime ni bazo ni riñon derecho
else if (this.showRinonl== true && this.showVesicula == true && this.showBazo == false && this.showRinond == false) {
  this.createAbdominalno_bazo_rinondPdf();
}
//no imprime ni bazo ni riñon izquierdo
else if (this.showRinonl== false && this.showVesicula == true && this.showBazo == false && this.showRinond == true) {
  this.createAbdominalno_bazo_rinonlPdf();
}

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
    this.addSonografiaAbdominal();
    
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

