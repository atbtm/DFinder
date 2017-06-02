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

import { AuthService } from '../services/auth.service';
import { LoginService } from '../services/login.service';
import { PersonService } from '../services/person.service';

import { DataStorageService } from '../shared/data.storage';
import { SMS } from '@ionic-native/sms';
import { SMSService } from '../services/sms.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ListPage,
    AppointmentPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ListPage,
    AppointmentPage,
    ProfilePage
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
    PersonService
  ]
})
export class AppModule {}
