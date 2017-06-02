import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
 import { Person } from '../models/person.model';
//  import { AngularFireDatabase } from 'angularfire2/database';
 import { LoginService } from '../services/login.service';
 import { AuthService } from '../services/auth.service';
 import firebase from 'firebase';

@Injectable()
export class PersonService {

    person: Person;
    // public ssn = '620-57-5848';
    private ssn: string; 

     constructor(private loginSevice: LoginService, private http: Http, private authService: AuthService ) {
        
     }

     load() {
        return this.http.get('https://dfinder-e9ef7.firebaseio.com/Person/123-45-6788.json');
       
     }

     setPeron(person: Person) {
        this.person = person;
    }

    getPerson(): Person {
        return this.person;
    }
}