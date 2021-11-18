import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserData } from 'src/models/auth.models';
import { HttpClient } from '@angular/common/http';
import { LoginData } from '../../models/auth.models';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public currenUser: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth, private router: Router, private httpClient: HttpClient,
              private database: AngularFireDatabase) {
    this.currenUser = afAuth.authState;
  }

  // Metodo login

  login(loginData: LoginData) {
    return new Promise(async (resolve, rejects) => {
      this.afAuth
        .signInWithEmailAndPassword(loginData.email, loginData.password)
        .then((value) => {
          resolve(value);
          // console.log('Excelente, todo funciona bien');
          // this.router.navigateByUrl('/admin');
        })
        .catch((err) => {
          rejects(err);
        });
    });
  }

  // Metodo Crear usuario
  public async crearUsuario(userData: UserData): Promise<any> {
    const url: string = 'http://localhost:5001/qhservicedb/us-central1/createUser';
    return await this.httpClient.post(url, userData).toPromise().then((goodResponse) => {
      return goodResponse;
    }).catch((error) => {
      return error;
    });
    // this.afAuth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((value) => {
    //     console.log('Acceso exitoso', value);
    //     this.router.navigateByUrl('/login');
    //   })
    //   .catch((error) => {
    //     console.log('Algo salió mal: ', error);
    //   });
  }

  getUserData(uid) {
    console.log(uid);

    return this.database.object<any>(`sqPlatform/users/${uid}/`).valueChanges();
  }
  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

}
