import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// import { Person } from '../../models/person.model';
import { Procedure } from '../../models/procedure.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // person: Person;

  // procedures: Procedure[] = [
  //   new Procedure('R93.8', 'Xray', 'Abnormal findings on diagnostic imaging of other specified body structures', 250.00),
  //   new Procedure('B02000Z', 'CT Scan', 'Computerized Tomography (CT Scan) of Brain using High Osmolar Contrast, Unenhanced and Enhanced ', 579.99),
  //   new Procedure('Z12.31', 'Mammogram Screening', 'mammogram for malignant neoplasm of breast', 892.00)
  // ];

  constructor(public navCtrl: NavController) {

  }

  goToProfile() {

  }

}
