import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    loggedIn: boolean = false;

    isLoggedIn() {
        return this.loggedIn;
    }

    setLoggedIn(value: boolean) {
        this.loggedIn = value;
    }
}