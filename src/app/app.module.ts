import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/pages';
import { LoginPage } from '../pages/pages';
import { ListPage } from '../pages/pages';
import { AppointmentPage } from '../pages/pages';
import { ProfilePage } from '../pages/pages';
import { ProviderPage } from '../pages/pages';

import { AuthService } from '../services/auth.service';
import { LoginService } from '../services/login.service';
import { PersonService } from '../services/person.service';

import { DataStorageService } from '../shared/data.storage';
import { SMS } from '@ionic-native/sms';
import { SMSService } from '../services/sms.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Geolocation } from '@ionic-native/geolocation';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ListPage,
    AppointmentPage,
    ProfilePage,
    ProviderPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
          apiKey: 'AIzaSyBZmraWD9Qtku4ZxkM4eB8WvB7et2ML560'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ListPage,
    AppointmentPage,
    ProfilePage,
    ProviderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    LoginService,
    DataStorageService,
    SMS,
    SMSService,
    PersonService,
    Geolocation
  ]
})
export class AppModule {}
