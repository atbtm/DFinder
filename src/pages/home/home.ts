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
import { ProviderPage } from '../provider/provider';
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
    this.person = this.personService.getPerson(); 
  }
  
  goToProfile() {
    this.navCtrl.push(ProfilePage);
  }

  goToProviderPage() {
    this.navCtrl.push(ProviderPage)
  }

}
