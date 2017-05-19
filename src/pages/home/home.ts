import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Provider } from '../provider/provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToProvider() {
    this.navCtrl.push(Provider);
  }

}
