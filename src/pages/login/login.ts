import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http'
import { NavController, Nav, LoadingController, AlertController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { LoginService } from '../../services/login.service';
import { PersonService } from '../../services/person.service';

import { Person } from '../../models/person.model';
import { Profile } from '../../models/profile.model';
import { Address } from '../../models/address.model';
import { Encounter } from '../../models/encounter.model';
import { Insurance } from '../../models/insurance.model';

import 'rxjs'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  ssn: string;
  person: Person;

  constructor(private navCtrl: NavController, 
              private nav: Nav,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController,
              private authService: AuthService,
              private loginService: LoginService,
              private personService : PersonService) {
    
  }

  loadPersonDetails() {

    this.personService.load()
      .map((response: Response) => {
                return response.json();
            })
            .subscribe((data) => {
              if(data) {

              
              var name = data.PersonalDetails.Name;
              var dob = data.PersonalDetails.DOB;
              var gender = data.PersonalDetails.Gender;
              var id = data.ID;
              var photo = data.Photo;
              console.log('########## ' + photo);
              var primaryPhysician = data.PrimaryPhysician;
              var email = data.emailID;
              var address = new Address(data.Address.StreetAddress, 
                                        data.Address.City, 
                                        data.Address.Zipcode, 
                                        data.Address.State,
                                        data.Address.PhoneNumber);
                                        
              var enc = new Encounter(data.EncounterDetails.StartDate, 
                                            data.EncounterDetails.EncounterProvider,
                                            data.EncounterDetails.EncounterType,
                                            data.EncounterDetails.Diagnosis);

              var encounters = [];
              encounters.push(enc);

              var ins = new Insurance(data.Insurance.GroupId, data.Insurance.PlanName, data.Insurance.RxId);

              var insurances = [];
              insurances.push(ins);
              var profile = new Profile(photo, primaryPhysician, email, address, encounters, insurances);
              this.person = new Person(name, dob, gender, id, profile);
              this.personService.setPeron(this.person);
              // console.log(data.Address.City);
              console.log(this.person);
              }
            })
  }

  onLogin(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: "Longing you in..."
    });
    
    loading.present();
    this.authService.login(form.value.email, form.value.password)
        .then(data => {
          console.log(data);
          if(data != null) {
            this.ssn = form.value.password;
            this.loginService.setSSN(this.ssn);
            console.log(data);
            this.loadPersonDetails();
            
            // data.providerData.forEach(function(profile) {
            //   // console.log("Sign-in provider: "+profile.providerId);
            //   // console.log("  Provider-specific UID: "+profile.uid);
            //   // console.log("  Name: "+profile.displayName);
            //   // console.log("  Email: "+profile.email);
            //   // console.log("  Photo URL: "+profile.photoURL);
            // })
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
