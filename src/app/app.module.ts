import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/pages';
import { LoginPage } from '../pages/pages';
import { ListPage } from '../pages/pages';
import { AppointmentPage } from '../pages/pages';

import { AuthService } from '../services/auth.service';
import { LoginService } from '../pages/pages';
import { DataStorageService } from '../shared/data.storage';
import { SMS } from '@ionic-native/sms';
import { SMSService } from '../services/sms.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ListPage,
    AppointmentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ListPage,
    AppointmentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    LoginService,
    DataStorageService,
    SMS,
    SMSService 
  ]
})
export class AppModule {}
