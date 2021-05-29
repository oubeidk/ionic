import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';


export const firebaseConfig = {
  apiKey: "AIzaSyCwBk-oZtFGPcabIn3U1YwR5FxONnjdFek",
    authDomain: "to-dolist-b7007.firebaseapp.com",
    projectId: "to-dolist-b7007",
    storageBucket: "to-dolist-b7007.appspot.com",
    messagingSenderId: "194247486195",
    appId: "1:194247486195:web:79375f2113b70fc2262586",
    measurementId: "G-KN1TF1MTKP"
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
