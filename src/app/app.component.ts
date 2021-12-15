import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController} from  '@ionic/angular';
import {Storage} from '@ionic/storage';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  showFiller = false;

  constructor(
private storage: Storage,
public navctel: NavController,
private router: Router

  ) {
    
  }


 
  
}
