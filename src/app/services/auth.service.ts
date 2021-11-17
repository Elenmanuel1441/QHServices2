import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public currenUser: Observable<firebase.User>
  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.currenUser = afAuth.authState
  }

  // Metodo login

  login(email: string, password: string) {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((value) => {
        console.log('Excelente, todo funciona bien');
        this.router.navigateByUrl('/admin');
      })
      .catch((err) => {
        console.log('Algo salió mal: ', err.message);
      });
  }

  // Metodo Crear usuario
  crearUsuario(email: string, password: string) {
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((value) => {
        console.log('Acceso exitoso', value);
        this.router.navigateByUrl('/login');
      })
      .catch((error) => {
        console.log('Algo salió mal: ', error);
      });
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

}
