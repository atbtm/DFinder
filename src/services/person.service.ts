import { Injectable } from '@angular/core';

 import { Person } from '../models/person.model';
 import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
 import { LoginService } from '../../services/login.service';

@Injectable()
export class PersonService {

    person: Person;
    // public ssn = '620-57-5848';
    private ssn: string; 
    items: FirebaseListObservable<any>;

     constructor(private  db: AngularFireDatabase, private loginSevice: LoginService) {
        
     }

     load() {
         this.ssn = this.loginSevice.getSsn();
        this.items = this.db.list('/');
        console.log(this.ssn);
        const queryObservable = this.db.list('/', {
            query: {
                orderByChild: 'ID',
                equalTo: this.ssn 
            }
        });

        queryObservable.subscribe(queriedItems => {
            console.log(queriedItems);
            var name = queriedItems.PersonalDetails.Name;
            var dob = queriedItems.PersonalDetails.DOB;
            var gender = queriedItems.PersonalDetails.Gender;
            var id = queriedItems.ID;
            
            var diagnosis = queriedItems.EncounterDetails.Diagnosis;


            this.person = new Person(name, dob, gender, id);
        });
        return this.person;
     }

    // private person: Person;

    // constructor() {

    // }

     setPeron(person: Person) {
        this.person = person;
    }

    // getPerson(): Person {
    //     return this.person;
    // }
}