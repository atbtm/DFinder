import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { statelist } from '../../models/statelist';
import { SetLocation } from '../set-location/set-location';

@Component({
  selector: 'page-add-location',
  templateUrl: 'add-location.html',
})
export class AddLocation {

  usStates: any[] = statelist;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
  }

  onSubmit(myForm: NgForm) {
    console.log(myForm);
  }

  onOpenMap() {
    const modal = this.modalCtrl.create(SetLocation);
    modal.present();
  }

}
