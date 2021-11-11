import { Component, OnInit } from '@angular/core';
import { Validators , FormBuilder , FormGroup} from '@angular/forms';

@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio.page.html',
  styleUrls: ['./laboratorio.page.scss'],
})
export class LaboratorioPage implements OnInit {
  formInformacion: any = FormGroup;
  constructor(private crearForm: FormBuilder) { }

  ngOnInit(): void {
    this.formInformacion = this.crearForm.group(
      {
        cedula: ['',[Validators.required]],
        nombre: ['',[Validators.required]],
        apellido: ['',[Validators.required]],
        tipoDeSangre: ['',[Validators.required]],
        ars: ['',[Validators.required]],
        padecimientos: ['',[Validators.required]],
        alergias: ['',[Validators.required]]
      }
    )
  }

  getDataForm(){
    console.log(this.formInformacion.value);
    
  }

}
