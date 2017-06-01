import { Injectable } from '@angular/core';

import firebase from 'firebase';

@Injectable()
export class AuthService {
    token: string;

    getToken(){
        firebase.auth().currentUser.getToken()
            .then(
                (token: string) => this.token = token
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