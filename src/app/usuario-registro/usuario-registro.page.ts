  import { AfterViewInit, Component, OnInit } from '@angular/core';
  import { AlertController, ToastController } from '@ionic/angular';
  import { ApiService } from '../api.service';
  import { AuthService } from '../services/auth.service';
  import { UserData } from '../../models/auth.models';
  import { Router } from '@angular/router';

  @Component({
    selector: 'app-usuario-registro',
    templateUrl: './usuario-registro.page.html',
    styleUrls: ['./usuario-registro.page.scss'],
  })
  export class UsuarioRegistroPage implements OnInit, AfterViewInit{

  
  //datos de prueba de la nueva tabla
  
  title = 'angulardatatables';
  dtOptions: any = {};

  Seacrh01: string;
  p: number = 1;

    nombre: string;
    email: string;
    contrasena: string;
    estado: string;
    rol: string;

    nombres: any = [];

    constructor(
      public _apiService: ApiService,
      private afAuth: AuthService,
      public toastController: ToastController,
      public alertController: AlertController,
      private router: Router,
    ){
      this.getUsuarios(); 
      this.limpiarCampos();
    }
    ngAfterViewInit(): void {
      throw new Error('Method not implemented.');
    }


    async addUsuario()
    {
      if(this.nombre == "")
      {
        const toast = await this.toastController.create({
        message: 'Ingrese un nombre',
        duration: 1500,
        color: "danger",
        cssClass: 'toastVal',
        position: "top",
        });
        toast.present();
      }
      else if(this.contrasena == "")
      {
        const toast = await this.toastController.create({
          message: 'Ingrese una password',
          duration: 1500,
        color: "danger",
        cssClass: 'toastVal',
        position: "top",
        });
        toast.present();
      }
      else if(this.rol == "")
      {
        const toast = await this.toastController.create({
          message: 'Ingrese un rol',
          duration: 1500,
        color: "danger",
        cssClass: 'toastVal',
        position: "top",
        });
        toast.present();
      }
      else if(this.email == "")
      {
        const toast = await this.toastController.create({
          message: 'Ingrese un correo',
          duration: 1500,
        color: "danger",
        cssClass: 'toastVal',
        position: "top",
        });
        toast.present();
      }
  else{

    let data = {
      nombre: this.nombre,
      contrasena: this.contrasena,
      estado: this.estado,
      rol: this.rol,
      email: this.email
    }

    this._apiService.addusuario(data).subscribe((res:any) => {
    console.log("SUCCESS ===",res);
    this.limpiarCampos();
    this.presentToast('Guardado exitosamente!');
    this.getUsuarios();
    //this.dtOptions.ajax.reload(null, false);

    },(error: any) => {
      this.presentToastErrAdd('Error al guardar!');
      console.log("Error ===",error);
    })

    }
  }


    ngOnInit()
    {

      // this._apiService.getUsuarios().subscribe((response)=>{
      //   this.nombres=response;
      // })
   
    this.limpiarCampos();
    

    //cargar los datos de pruebas de la nueva tabla

    
  
    this.dtOptions  = {
      pagingType: 'full_numbers',
      pageLength: 5,
      language: {
        url: 'assets/json/idioma_esp.json'
      } ,
      processing: true,
      dom: 'Bfrtip',
        buttons: [
            {
              extend:'copy', "className": 'btn btn-secondary'
            }, 
            { 
              extend:'csv',
              title: 'Reporte de usurio',  "className":  'btn btn-primary' 
            }, 
            {
             extend: 'excel',
             title: 'Reporte de usurio', "className": 'btn btn-success'
            },
            {
              extend: 'pdf',
              title: 'Reporte de usurio', "className": 'btn btn-danger'
            }
        ]  
          
      };
      this.dtOptions().clear().draw();
      this.dtOptions.ajax.reload(null, false);
      // this.dtOptions.ajax.reload(null, false);
    //fin de los datos de pruebas


    }

    getUsuarios(){
      this._apiService.getUsuarios().subscribe((res:any) => {
        console.log("SUCCESS ===",res);
        this.nombres = res;
        },(error: any) => {
          console.log("ERROR ===",error);
        })
  } 

  limpiarCampos()
  {
    this.nombre = '';
    this.email = '';
    this.contrasena = '';
    this.estado = '';
    this.rol = '';
    
  }



  deleUsuarios(id){

  this._apiService.deleUsuarios(id).subscribe((res:any) => {
    this.presentToastEli('Eliminado exitosamente!');
    this.getUsuarios(); 
    this.dtOptions().clear().draw();
    this.dtOptions.ajax.reload(null, false);
    //this.router.navigate(['admin/usuario-registro']);
   
    },(error: any) => {
      this.presentToastErrEli('Error al eliminar!');
      console.log("ERROR")
    })
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

    async presentToastEli (mensaje: string) {
      const toast = await this.toastController.create({
        message: mensaje,
        duration: 1500,
        color: "danger",
        cssClass: 'toastEli',
        position: "top",
      });
      toast.present();
    }

    async presentToastErrEli (mensaje: string) {
      const toast = await this.toastController.create({
        message: mensaje,
        duration: 1500,
        color: "danger",
        cssClass: 'toastEli',
        position: "top",
      });
      toast.present();
    }

    async presentToastErrAdd (mensaje: string) {
      const toast = await this.toastController.create({
        message: mensaje,
        duration: 1500,
        color: "danger",
        cssClass: 'toastEli',
        position: "top",
      });
      toast.present();
    }

    async presentAlertConfirm() {
      const alert = await this.alertController.create({
        cssClass: 'normal',
        header: 'Confirm!',
        message: 'Message <strong>text</strong>!!!',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Okay',
            handler: () => {
              console.log('Confirm Okay');
            }
          }
        ]
      });

      await alert.present();
    }

  async presentAlert()
  {
    const alert = await this.alertController.create({
      header: "Borrar usuario",
      message: "Estas seguro que quieres borrar el usuario?",
      buttons: [
        {
          text: "Si",
          handler: () => {

              }
          }
    ],
    });
    await alert.present()
    let result = await alert.onDidDismiss();
    console.log(result);
  }


    nuevoUsuario(){
      const userData: UserData = {
        name: this.nombre,
        email: this.email,
        password: this.contrasena,
        type: this.rol,
      };
      this.afAuth.crearUsuario(userData);
      // this.afAuth.crearUsuario(this.email, this.contrasena)
    }

    key: string = 'id';
    reverse: boolean = false;
    sort(key)
    
    {
      this.key= key;
      this.reverse = !this.reverse;
    }

  }


  

