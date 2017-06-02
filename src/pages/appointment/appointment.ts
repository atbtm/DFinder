import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// import { AppointmentService } from './appointment.service';
import { SMSService } from '../../services/sms.service';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person.model';
import { Provider } from '../../models/provider.model';

@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html'
})
export class AppointmentPage {

  person: Person;
  provider: Provider;
  confirm: boolean = false;

  constructor(public navCtrl: NavController, 
              private smsService: SMSService,
              private personService: PersonService,
              private navParams: NavParams) {
    
  }

  ionViewWillEnter() {
    this.provider = this.navParams.get('provider');
   this.person = this.personService.getPerson();
  }

  confirmAppointment() {
      this.confirm = true;
  }
  
}
