import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-laboratorio-resultados',
  templateUrl: './laboratorio-resultados.page.html',
  styleUrls: ['./laboratorio-resultados.page.scss'],
})
export class LaboratorioResultadosPage implements OnInit {


  condiccion: number = 0;
  constructor(private router: Router, private afAuth: AuthService) { }

  ngOnInit() {
  }


  volver(){
    this.router.navigateByUrl('admin/laboratorio');
  }
  
  logout(){
    this.afAuth.logout();
  }
  toggle(){
    if(this.condiccion === 0){
      this.condiccion = 1;
    }
    else{
      this.condiccion = 0;
    }
  }
  
}
