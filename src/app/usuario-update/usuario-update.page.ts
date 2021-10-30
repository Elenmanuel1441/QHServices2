import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.page.html',
  styleUrls: ['./usuario-update.page.scss'],
})
export class UsuarioUpdatePage implements OnInit {
  id: any;
  nombre: any;
  estado: any;
  rol: any;



 constructor(
  private route: ActivatedRoute,
  private router: Router,
  private _apiservice: ApiService

 ) { 

   this.route.params.subscribe((param:any) =>{
     this.id = param.id;
     console.log(this.id);
     this.getUsuario(this.id);
   })
 }

 ngOnInit() {
 }
 getUsuario(id)
 {
   this._apiservice.getUsuario(id).subscribe((res:any)=>{
     console.log("SUCCESS",res);
     let nombres = res[0];
     this.nombre = nombres.nombre;
     this.estado = nombres.estado;
     this.rol = nombres.rol;
 }, (err:any)=>{
   console.log("ERROR", err)
 })
 
}
 
 UpdateUsuario()
{
 let data = {
   nombre: this.nombre,
   estado: this.estado,
   rol: this.rol
   }
   this._apiservice.UpdateUsuario(this.id,data).subscribe((res:any)=>{
     console.log("SUCCESS",res);
     this.router.navigateByUrl('/usuario-registro');
     
 }, (err:any)=>{
   console.log("ERROR", err)
 })
}
 
 
}

