import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  loginForm: FormGroup;

  constructor(private afAuth: AuthService, private formBuider: FormBuilder) {

    this.loginForm = this.formBuider.group({
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required]
    })
   }

  ngOnInit() {
   
  }

  login(){
    this.afAuth.login(this.loginForm.value.email, this.loginForm.value.contrasena)
  }

}
