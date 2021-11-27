import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../api.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { AuthService } from '../services/auth.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-laboratorio-formulario',
  templateUrl: './laboratorio-formulario.page.html',
  styleUrls: ['./laboratorio-formulario.page.scss'],
})
export class LaboratorioFormularioPage implements OnInit {
  id_analisis: any;
  estado: any;
  id_col_laboratorio: any;
  id_paciente_analisis : any;
  id_paciente : any;
  nombre_paciente : any;
  apellido_paciente : any;
  sexo_paciente : any;
  Edad : any;
  showExamenOrina: boolean;
  showExamenCoprologico: boolean;
  showCovid19: boolean;
  showTipificacion: boolean;
  c19={
    resultado : ''
  }
  pdfObj = null;


  constructor( private route: ActivatedRoute,
    private router: Router,
    public _apiservice: ApiService,
    public toastController: ToastController,
    private afAuth: AuthService) {

      this.route.params.subscribe((param:any) =>{
        this.id_paciente_analisis = param.id_paciente_analisis;
        console.log(this.id_paciente_analisis);
        this.getAnalisi(this.id_paciente_analisis);
        setTimeout(() => 
        {
           //aqui va la consulta
           this.checkAnalisis();
           console.log(this.id_analisis,this.showCovid19,this.showExamenCoprologico,this.showExamenOrina,this.showTipificacion)
        },
        1500);
      })
   


     }

  ngOnInit() {
  }



  getAnalisi(id_paciente_analisis)
 {
   this._apiservice.getAnalisi(id_paciente_analisis).subscribe((res:any)=>{
     console.log("SUCCESS",res);
     let analisis = res[0];
      this.id_analisis = analisis.id_analisis  ;
      this.estado = analisis.estado;
      this.id_paciente_analisis = analisis.id_paciente_analisis ;
      this.id_paciente= analisis.id_paciente ;
      this.nombre_paciente=   analisis.nombre_paciente ;
      this.apellido_paciente =  analisis.apellido_paciente ;
      this.sexo_paciente= analisis.sexo_paciente ;
      this.id_col_laboratorio = analisis.id_col_laboratorio;
      this.Edad =analisis.EDAD ;
 
     
     
      }, (err:any)=>{
   console.log("ERROR", err)
 })
 
 }
    checkAnalisis()
  {

    if (this.id_analisis == 'EXAMEN DE ORINA') {
    this.showExamenOrina = true;
    this.showTipificacion= false;
    this.showExamenCoprologico= false;
    this.showCovid19= false;

         }
    else if (this.id_analisis == 'EXAMEN COPROLOGICO') {
    this.showExamenOrina = false;
    this.showTipificacion= false;
    this.showExamenCoprologico= true;
    this.showCovid19= false;

        }
    else if (this.id_analisis == 'PRUEBA ANTIGENICA CV-19') {
    this.showExamenOrina = false;
    this.showTipificacion= false;
    this.showExamenCoprologico= false;
    this.showCovid19= true;

       }

    else if (this.id_analisis == 'TIPIFICACION') {
    this.showExamenOrina = false;
    this.showTipificacion= true;
    this.showExamenCoprologico= false;
    this.showCovid19= false;

      }








 }
 async createPdf() {
  var docDefinition: any = {
    pageSize: 'LETTER',
    content:[

      { text: 'CENTRO  DIAGNOSTICO SAN FERNANDO DE MONTECRISTI \n\n', style: 'header',alignment: 'center' },
      { text: 'Calle Pedro Pablo Fernández, Esq. Beller, ', style: 'sub-header',alignment: 'center' },
      { text: 'Montecristi, R.D Tel: 809-579-3314 \n\n ', style: 'sub-header',alignment: 'center' },
      { text: 'Laboratorio \n\n', style: 'header',alignment: 'center' },
      {
        text:  [
               {text: new Date().toLocaleDateString(), alignment: 'left'}, '\n\n',
               ]
      },

      {
        text:  [
               {text: 'PACIENTE:', style: 'subheader'}, this.nombre_paciente +' '+ this.apellido_paciente, '\n\n',
              ]
      },
      {
        text:  [
               {text: 'EDAD:', style: 'subheader'}, this.Edad,'\n\n',
              ]
      },
      // {
      //   image: await this.getBase64ImageFromURL(
      //     "https://images.pexels.com/photos/209640/pexels-photo-209640.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300"

      //   )
      // } , 

      { text: 'MEDICO: A QUIEN CORRESPONDA', style: 'subheader'},

      { text: 'PRUEBA ANTIGÉNICA DE COVID-19:\n\n', style: 'subheader', alignment: 'center' },  
      { text: 'Tipo de Muestra: NASOFARIGEA:\n\n'}, 
      { text: 'Método: HISOPADO\n\n'},
    {  text:[
      { text: 'Resultado:'},this.c19.resultado    
    ]}
    ,
      { text: '________________________', style: 'header',alignment: 'center' },
      { text: '      BIOANALISTA',alignment: 'center' }
      
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
  this.pdfObj = pdfMake.createPdf(docDefinition);
}

completeAnalisis(id_paciente_analisis){
  this._apiservice.completeAnalisis(id_paciente_analisis).subscribe((res:any)=>{
    console.log("SUCCESS",res);
    this.presentToast('Liberado exitosamente!');
    

    
    
}, (err:any)=>{
 this.presentToastError('Error al liberar!');
  console.log("ERROR", err);
  
})
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
    this.completeAnalisis(this.id_paciente_analisis);
    this.router.navigate(['/laboratorio-analisis/',this.id_col_laboratorio])
    this.pdfObj = null;
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
    position: "top",
    
  });
  toast.present();
}

async presentToastError(mensaje: string) {
  const toast = await this.toastController.create({
    message: mensaje,
    duration: 1500,
    color: "danger",
    cssClass: 'toastAdd',
    position: "top",
    
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
    position: "top",
  });
  toast.present();
}


}
