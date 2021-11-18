import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { LoginData } from '../../models/auth.models';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  loginForm: FormGroup;

  constructor(private afAuth: AuthService, private formBuider: FormBuilder, private router: Router) {

    this.loginForm = this.formBuider.group({
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required]
    });
   }

  ngOnInit() {

  }

  login(){
    const loginData: LoginData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.contrasena,
    };
    this.afAuth.login(loginData).then((user: any) => {
      console.log('El user', user);
      const uid: string = user.user.uid;
      console.log(uid);
      this.afAuth.getUserData(uid).subscribe((userData) => {
        console.log(userData);
        const typeOfUser = {type: userData.type};
        this.router.navigate(['/admin'], {queryParams: typeOfUser});
      });
    }).catch((error) => {
      console.log('El error', error);
    });
  }

}
