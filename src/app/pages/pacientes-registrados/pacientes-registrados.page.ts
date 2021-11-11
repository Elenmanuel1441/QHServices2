import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-pacientes-registrados',
  templateUrl: './pacientes-registrados.page.html',
  styleUrls: ['./pacientes-registrados.page.scss'],
})
export class PacientesRegistradosPage implements OnInit {
  pacientes: any [] = [];

  constructor(private databaseService: DataBaseService) { }

  ngOnInit() {

    this.getpacientesAll();
  }

    // COn este metodo obtengo todos los datos en la base de datos  
    getpacientesAll(){
      this.databaseService.getDataAll().subscribe(data => {
        this.pacientes = [];
       data.forEach((element:any) => {
         this.pacientes.push({
           id: element.payload.doc.id,
           ...element.payload.doc.data()
          })
       });
       console.log(this.pacientes)
      })
    }

}
