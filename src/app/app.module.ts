import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Angular
import {MatIconModule} from '@angular/material/icon';





@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), 
     IonicStorageModule.forRoot(),
     HttpClientModule, AppRoutingModule,
     BrowserAnimationsModule,
     MatIconModule
    ],
  providers: [{ provide: RouteReuseStrategy,
     useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
