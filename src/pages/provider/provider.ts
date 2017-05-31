import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AddLocation } from '../add-location/add-location';

import { ProviderService } from './service';

@Component({
  selector: 'page-provider',
  templateUrl: 'provider.html',
})
export class Provider implements OnInit {

  providers: string[];

  addProviderPage = AddLocation;

  constructor(public navCtrl: NavController, public navParams: NavParams, private providerService: ProviderService) {
  }

  ngOnInit() {
    // this.providers = this.providerService.getProviders();
    console.log("YYYYYYYYYYYYY")
    this.providerService.getProviders().subscribe((data) => {
          //  this.data = data;
        console.log("########### " + data);
       }) 
        // return this.providers;
  }

}
