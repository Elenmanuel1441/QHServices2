import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Registro } from "../models/registro.model";


@Injectable({
    providedIn: 'root'
})

export class DataBaseService{
    constructor(private af: AngularFirestore){}


    registro(pacientes: Registro): Promise<any>{
        return this.af.collection('pacientes').add(pacientes);
    }

    getDataAll(): Observable<any>{    
        try {
            return this.af.collection('pacientes').snapshotChanges();
            
        } catch (error) {
            console.log(error)
        }
    }
}