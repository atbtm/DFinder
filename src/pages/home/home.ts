import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {Person} from '../../../models/person.model'

// import { Person } from '../../models/person.model';
import { Procedure } from '../../models/procedure.model';
import {PersonService} from '../../services/person.service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  person: Person;
  constructor(public navCtrl: NavController, private personService : PersonService ) {

  }

  ngOnInit() {
    this.person = this.personService.load();
  }

  goToProfile() {

  }

}
