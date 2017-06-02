import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response } from '@angular/http'
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Person } from '../../models/person.model';
import { Profile } from '../../models/profile.model';
import { Address } from '../../models/address.model';
import { Encounter } from '../../models/encounter.model';
import { Insurance } from '../../models/insurance.model';


// import { Person } from '../../models/person.model';
// import { Procedure } from '../../models/procedure.model';
import { PersonService } from '../../services/person.service';

import { ProfilePage } from '../profile/profile';
// import { ProfilePage } from '../profile/profile';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  person: Person;
  constructor(public navCtrl: NavController, private personService : PersonService ) {

  }

  ngOnInit() {
    this.personService.load()
      .map((response: Response) => {
                return response.json();
            })
            .subscribe((data) => {
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
            })
  }
  
  goToProfile() {
    this.navCtrl.push(ProfilePage)
  }

}
