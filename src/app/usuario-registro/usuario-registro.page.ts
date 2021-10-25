import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-usuario-registro',
  templateUrl: './usuario-registro.page.html',
  styleUrls: ['./usuario-registro.page.scss'],
})
export class UsuarioRegistroPage implements OnInit{
  nombre: any;
  estado: any;
  rol: any;

  permission: boolean;

  buscarUsuario: any;
  
  nombres: any = [];

  constructor(
    public _apiService: ApiService
  ){
    this.getUsuarios();
  }

  addUsuario()
  {
    let data = {
      nombre: this.nombre,
      estado: this.estado,
      rol: this.rol
    }

    this._apiService.addusuario(data).subscribe((res:any) => {
    console.log("SUCCESS ===",res);
    this.nombre = '';
    this.estado = '';  
    this.rol = ''; 
    alert('SUCCESS');
    this.getUsuarios();

    },(error: any) => {
      alert('ERROR');
      console.log("Error ===",error);
    })
    
  }
  ngOnInit() 
  {
    this.permission = true;
    console.log("Hii");
    this._apiService.getUsuarios().subscribe(res=>{
      console.log("Res",res)
      this.nombres=res;
      this.buscarUsuario = this.nombres;
    })

    
  }
   getUsuarios(){
    this._apiService.getUsuarios().subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      this.nombres = res;
      },(error: any) => {
        console.log("ERROR ===",error);
      })

 }
 deleUsuarios(id){
  this._apiService.deleUsuarios(id).subscribe((res:any) => {
    console.log("SUCCESS");
    this.getUsuarios();
    },(error: any) => {
      console.log("ERROR")
    })
  }
  buscarUsuarios(event)
  {
    const text = event.target.value;
    this.buscarUsuario = this.nombre;
    if(text && text.trim()!= '')
    {
      this.buscarUsuario = this.buscarUsuario.filter((user: any)=> {
        return (user.nombre.toLowerCase().indexOf(text.toLowerCase()) > -1);
      })
    }
  }

}
