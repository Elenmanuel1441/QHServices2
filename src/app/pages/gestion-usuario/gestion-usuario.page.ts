import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DbUsuariosServices } from 'src/app/services/db-usuarios.service';



@Component({
  selector: 'app-gestion-usuario',
  templateUrl: './gestion-usuario.page.html',
  styleUrls: ['./gestion-usuario.page.scss'],
})
export class GestionUsuarioPage implements OnInit {

  form_register: FormGroup;
  sumitted = false;

  constructor(private fb: FormBuilder, private databaseService: DbUsuariosServices, private toastr: ToastrService) { 
      this.form_register = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      puesto: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required],
      sexo: ['', Validators.required]
    })
  }
  ngOnInit() {
    
  }

  enviarFormularioUser(){
    const registro_usuario: any = {
     nombre: this.form_register.value.nombre,
     apellido: this.form_register.value.apellido,
     telefono: this.form_register.value.telefono,
     puesto: this.form_register.value.puesto,
     correo: this.form_register.value.correo,
     contrasena: this.form_register.value.contrasena,
     sexo: this.form_register.value.sexo
  }
   this.databaseService.nuevoUsuario(registro_usuario).then(() => {
       this.toastr.success('El Registro del Paciente sue Exito', 'Registro de paciente');
       console.log(this.form_register)
   }).catch( error => {
     console.log(error)
   })
  }



}
