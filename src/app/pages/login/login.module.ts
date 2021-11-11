import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';



import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
