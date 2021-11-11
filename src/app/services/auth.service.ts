import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currenUser: Observable<firebase.User>
  private redirectUrl: string
 


  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private afEstore: AngularFirestore,
    ){       
    this.currenUser = afAuth.authState
    }



  // Registre new user
  createNewUser(email:string, pass:string){
    this.afAuth.createUserWithEmailAndPassword(email, pass)
    .then(value => {
      console.log("Success", value);
      this.router.navigateByUrl('/login');
    })
    .catch(err => {
      console.log("Something went wrong: ", err)
    });
  }

  // Seguridad
isLoggedIn(): boolean{
  return !!this.currenUser;
}

  // Login auth
  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Inicio de Sesion Exitoso!', value);
      this.router.navigate(['/admin']);
    })
    .catch(err => {
      console.log('Hubo un error en el inicio de sesion: ', err.message);
      alert("Datos incorrectos")
    });
  }

  logout(){
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/']);
    })
  }
}

