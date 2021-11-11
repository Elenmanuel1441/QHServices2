import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";





@Injectable({
    providedIn: 'root'
})

export class DbUsuariosServices{
    constructor(private afEstore: AngularFirestore){ }

    
    nuevoUsuario(usuario: string): Promise<any>{
        return this.afEstore.collection('usuarios').add(usuario);
    }


    getUserDataAll(): Observable<any>{
        try {
            return this.afEstore.collection('usuarios').snapshotChanges();
        } catch (error) {
            console.log(error)
        }
    }
}