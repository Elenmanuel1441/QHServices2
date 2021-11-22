import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Angular
import {MatIconModule} from '@angular/material/icon';

//chart dashboard
import { ChartsModule } from 'ng2-charts';
import {DataTablesModule} from 'angular-datatables';


// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';






@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), 
     IonicStorageModule.forRoot(),
     HttpClientModule, AppRoutingModule,
     BrowserAnimationsModule,
     MatIconModule, ChartsModule,
      AngularFireModule.initializeApp(environment.DBConfig),
      AngularFireAuthModule,
      AngularFireDatabaseModule,
      DataTablesModule,
      MatIconModule

    ],
  providers: [{ provide: RouteReuseStrategy,
     useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
