import { Component, OnInit } from '@angular/core';
import { Validators , FormBuilder , FormGroup} from '@angular/forms';



@Component({
  selector: 'app-cola-laboratorio',
  templateUrl: './cola-laboratorio.page.html',
  styleUrls: ['./cola-laboratorio.page.scss'],
})
export class ColaLaboratorioPage implements OnInit {

  formInformacion: FormGroup;
  constructor(private crearForm: FormBuilder) { }

  ngOnInit(): void {
    this.formInformacion = this.crearForm.group(
      {
        cedula: ['',[Validators.required]],
        nombre_completo: ['',[Validators.required]],
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
