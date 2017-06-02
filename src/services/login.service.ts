import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    loggedIn: boolean = false;
    ssn: string;

    isLoggedIn() {
        return this.loggedIn;
    }

    setLoggedIn(value: boolean) {
        this.loggedIn = value;
    }

    getSSN() {
        return this.ssn;
    }

    setSSN(ssn: string) {
        this.ssn = ssn;
    }
}