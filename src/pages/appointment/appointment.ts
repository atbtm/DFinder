import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// import { AppointmentService } from './appointment.service';
import { SMSService } from '../../services/sms.service';

@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html'
})
export class AppointmentPage {

  constructor(public navCtrl: NavController, private smsService: SMSService) {
    
  }

  
}
