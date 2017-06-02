import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';

import { HomePage } from '../pages/pages';
import { LoginPage } from '../pages/pages';
import { ListPage } from '../pages/pages';
import { AppointmentPage } from '../pages/pages';
import { ProviderPage } from '../pages/pages';
import { ProfilePage } from '../pages/pages';

import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  loginPage = LoginPage;
  appointmentPage = AppointmentPage;
  providerPage = ProviderPage;
  profilePage = ProfilePage;
  isLoggedIn = false;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              private menuCtrl: MenuController,
              private authService: AuthService) {

    firebase.initializeApp({
      apiKey: "AIzaSyBriR1rBSf_Ve-BJ77tog0Kdd41gx2v2mM",
      authDomain: "dfinder-e9ef7.firebaseapp.com",
      databaseURL: "https://dfinder-e9ef7.firebaseio.com",
    });
//     firebase.initializeApp({
//       apiKey: "AIzaSyAXwqkQhaRynB_yJz1NUezgP8JoaQt1Sc0",
//       authDomain: "fir-playground-195a9.firebaseapp.com",
//       databaseURL: "https://fir-playground-195a9.firebaseio.com",
//       projectId: "fir-playground-195a9",
//       storageBucket: "fir-playground-195a9.appspot.com",
//       messagingSenderId: "692509908432"
//     });

    


    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.isLoggedIn = true;
        this.rootPage = HomePage;
      } else {
        this.isLoggedIn = false;
        this.rootPage = LoginPage;
      }
    })
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Login', component: LoginPage },
      { title: 'Home', component: HomePage },
      { title: 'Appointment', component: AppointmentPage },
      { title: 'Providers', component: ProviderPage },
      { title: 'Profile', component: ProfilePage },
      { title: 'Logout', component: "" }
    ];

  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
      console.log(page);
      this.nav.setRoot(page); 
      this.menuCtrl.close();
  }

  onLogout() {
    this.authService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(LoginPage);
  }
}
