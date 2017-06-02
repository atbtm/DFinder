import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage implements OnInit {
  person: Person;
  
  constructor(public navCtrl: NavController, private personService : PersonService ) {

  }

  ngOnInit() {
      this.person = this.personService.getPerson();
  }
}