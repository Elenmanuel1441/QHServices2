import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  url = 'https://api.covid19api.com/summary';

  constructor(private http: HttpClient) { }


  getResultaldosCovid(){  
    return this.http.get(this.url);
  }

  getDatosCiudades(country: string){
    return this.http.get(this.url + '/countries/' + country)
  }

  getResultadosDiarios(){
    return this.http.get(this.url + 'daily');
  }
  getCiudades(){
    return this.http.get(this.url + '/countries');
  }



}
