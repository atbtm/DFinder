import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import * as firebase from "firebase";
import { Provider } from '../../models/provider.model';
import { Procedure } from '../../models/procedure.model';
import { Geolocation } from '@ionic-native/geolocation';
import { AppointmentPage } from '../appointment/appointment';

// firebase.initializeApp({
//     apiKey: "AIzaSyAXwqkQhaRynB_yJz1NUezgP8JoaQt1Sc0",
//     authDomain: "fir-playground-195a9.firebaseapp.com",
//     databaseURL: "https://fir-playground-195a9.firebaseio.com",
//     projectId: "fir-playground-195a9",
//     storageBucket: "fir-playground-195a9.appspot.com",
//     messagingSenderId: "692509908432"
// })


@Component({
  selector: 'page-home',
  templateUrl: 'provider.html'
})
export class ProviderPage {

    public locationIsSet;
    public userLat;
    public userLng;
    public userLocation = "Search for providers centered at..";
    public userProcedure;
    public providerIdArr = [];
    public procedureList = [];
    public providerList = [];
    public providerId;
    public servicePriceMap;
    engine: string;
    public providers = [];
    

    constructor(public navCtrl: NavController, 
                public alertCtrl: AlertController,
                public http: Http, 
                public geoloc: Geolocation) {
      this.engine = "This is engine string";
      this.servicePriceMap = new Map();
      this.procedureList.push("mri");
      this.servicePriceMap.set("mri", 1000);
      this.procedureList.push("dental");
      this.servicePriceMap.set("dental", 50);                 // map to store price offset for service on top of base price
      this.locationIsSet = false;
      
  }
  getProviderFromFirebase(uid) {
      var p = firebase.database().ref('providers/').once('value');
      p.then(res => {
          var provider = res.val()[uid];
          var jsonServices = provider.services;
          var currProcedure;
          currProcedure = new Procedure(this.userProcedure, jsonServices[this.userProcedure]);
          let currProvider = new Provider(provider.id, provider.name,
          provider.geometry.location.lat, provider.geometry.location.lng,
          provider.vicinity, provider.rating,  currProcedure);
          this.providerId = currProvider.name;
          this.providerList.push(currProvider);
      }
      );
  }
  public optionsFn(): void {

      let procedureSelected = this.userProcedure;
  }
  pushProviders(data) {
      let providerResult = data.json().results;
      function genPrice(base, servicePrice, randomFactor, insuranceFactor) {
          return Math.floor((base + servicePrice * (0.8 + 0.2 * randomFactor) * insuranceFactor) * 100) / 100;
      }
      this.providerIdArr = [];
      for (let provider of providerResult) {
          let id = provider.id;
          this.providerIdArr.push(id);
          /**
           *  These are parameters that need to be passed in
           */
          let basePrice = 50;                                 // base price for all services
          let randomFactor = Math.random();             // currently scaled at 0.7 * random

          provider["services"] = {};
          var serviceItr = this.servicePriceMap.keys();
          var nextService = serviceItr.next();
          while (nextService.value != undefined) {
              let ServiceName = nextService.value;
              provider["services"][ServiceName] = {};
              provider["services"][ServiceName] = {
                  "noInsurance": genPrice(basePrice, this.servicePriceMap.get(ServiceName), randomFactor, 1.26),
                  "basicInsurance": genPrice(basePrice, this.servicePriceMap.get(ServiceName), randomFactor, 1.012),
                  "premiumInsurance": genPrice(basePrice, this.servicePriceMap.get(ServiceName), randomFactor, 0.74)
              };
              nextService = serviceItr.next();
          }
          firebase.database().ref('providers/' + id).set(provider);
      }
      
  }
     
  populateDbToGrid() {
      this.providerList = [];
      this.providerIdArr.forEach(uid => {
          var v = this.getProviderFromFirebase(uid);
      })
  }

  locateMe() {
     // this.userLocation
      this.geoloc.getCurrentPosition()
          .then(
          location => {
              this.userLocation = location.coords.latitude + ", " + location.coords.longitude;
              this.userLat = location.coords.latitude;
              this.userLng = location.coords.longitude;
              this.locationIsSet = true;
          }
          )
          .catch(
          error => {
              console.log(error);
          }
          );
  }
  getProviders() {
      this.providers = [];
      let coordQuery = "https://maps.googleapis.com/maps/api/geocode/json?address=" + this.userLocation + "&key=AIzaSyBZmraWD9Qtku4ZxkM4eB8WvB7et2ML560";
      var jsonRes;

      this.http.get(coordQuery).subscribe(data => {
          this.userLat = data.json().results[0].geometry.location.lat;
          this.userLng = data.json().results[0].geometry.location.lng;

          /**
           *  These are parameters that need to be passed in
           */
          let radius = "5000";               // search radius
          let providerType = "hospital";      // facility type

          let providerQuery;
          providerQuery = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.userLat},${this.userLng}&radius=${radius}&type=${providerType}&key=AIzaSyBZmraWD9Qtku4ZxkM4eB8WvB7et2ML560`;

          this.providerIdArr = [];
          this.http.get(providerQuery)
              .subscribe(data => {
                  jsonRes = data;
                  this.pushProviders(jsonRes);
                  this.locationIsSet = true;
                  this.populateDbToGrid();

              }, (err) => {
                  console.log(err);
              });
      }, (err) => {
          console.log(err);
        }); 
  }

  bookAppointment(provider) {
      this.navCtrl.push(AppointmentPage, {'provider': provider});
  }

  
}
