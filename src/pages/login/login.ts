import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, Nav, LoadingController, AlertController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(private navCtrl: NavController, 
              private nav: Nav,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController,
              private authService: AuthService) {
    
  }

  onLogin(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: "Longing you in..."
    });
    loading.present();
    this.authService.login(form.value.email, form.value.password)
        .then(data => {

          if(data != null) {
              console.log("  Provider-specific UID: "+ data.getIdToken());
            data.providerData.forEach(function(profile) {
              console.log("Sign-in provider: "+profile.providerId);
              console.log("  Provider-specific UID: "+profile.uid);
              console.log("  Name: "+profile.displayName);
              console.log("  Email: "+profile.email);
              console.log("  Photo URL: "+profile.photoURL);
            })
          }
          loading.dismiss();
        })
        .catch(error => {
          loading.dismiss();
          const alert = this.alertCtrl.create({
            title: "Loging Failed",
            message: error.message,
            buttons: ['Ok']
          });
          alert.present();
        })
  }
}
