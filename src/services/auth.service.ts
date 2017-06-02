import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

import firebase from 'firebase';

@Injectable()
export class AuthService {
    token: string;

    getToken(){
        firebase.auth().currentUser.getToken()
            .then(
                (token: string) => {
                    this.token = token;

                    console.log(this.token)
                }
            );

        return this.token;
    }

    login(email: string, password: string) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }
    logout() {
        firebase.auth().signOut();
    }
}