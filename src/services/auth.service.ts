import { Injectable } from '@angular/core';

import firebase from 'firebase';

@Injectable()
export class AuthService {

    login(email: string, password: string) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }
    logout() {
        firebase.auth().signOut();
    }
}