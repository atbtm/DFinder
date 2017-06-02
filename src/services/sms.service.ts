import { Component, Injectable } from '@angular/core';
import { SMS } from '@ionic-native/sms';
import { ToastController } from 'ionic-angular';


@Injectable()
export class SMSService {

  phoneNumber: number;
  textMessage: string;

  constructor(private toast: ToastController, private smsVar: SMS) {

  }

  async sendTextMessage() { 
    try { 
      await this.smsVar.send(String(this.phoneNumber), this.textMessage);
      const toast = this.toast.create({
      message: 'Text was sent!',
      duration: 3000
    });
      toast.present();
    } catch (e) {
        const toast = this.toast.create({
        message: 'Text was not sent!',
        duration: 3000
      });
      toast.present();
    }
  }
}
