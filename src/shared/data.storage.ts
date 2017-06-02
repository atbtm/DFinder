import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { Person } from '../models/person.model';

import { AuthService } from '../services/auth.service';

@Injectable()
export class DataStorageService {
     constructor(private http: Http, private authService: AuthService) {
  }

  setPerson(person: Person) {
      const token = this.authService.getToken();
      this.http.get('https://dfinder-e9ef7.firebaseio.com/people.json?auth=' + token, person);
  }
  getProvider() {
      const token = this.authService.getToken();
      this.http.get('https://dfinder-e9ef7.firebaseio.com/people.json?auth=' + token);
  }
}