import { Component, OnInit } from '@angular/core';
import { DbUsuariosServices } from 'src/app/services/db-usuarios.service';




@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  usuarios: any [] = [];

  constructor(private dbUsuarios: DbUsuariosServices ) { }

  ngOnInit() {

    this.getTodosLosUsuarios();
  }

    // COn este metodo obtengo todos los datos en la base de datos  
    getTodosLosUsuarios(){
      this.dbUsuarios.getUserDataAll().subscribe(data => {
        this.usuarios = [];
        data.forEach((element:any) => {
          this.usuarios.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
            
           
           })
        });
        console.log(this.usuarios)
       })
    }

}
