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
import { ServiceWorkerModule } from '@angular/service-worker';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';



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
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: environment.production,
        // Register the ServiceWorker as soon as the app is stable
        // or after 30 seconds (whichever comes first).
        registrationStrategy: 'registerWhenStable:30000'
      }),

    ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
