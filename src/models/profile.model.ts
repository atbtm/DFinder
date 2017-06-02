import { Address } from './address.model';
import { Encounter } from './encounter.model';
import { Insurance } from './insurance.model';

export class Profile {
    constructor(private photo: string, 
                private primaryPhyscian: string, 
                private email: string, 
                private address: Address,
                private encounters: Encounter[],
                private insurances: Insurance[]) {

    }

    setPhoto(url: string) {
        this.photo = url;
    }

    getPhoto() {
        return this.photo;
    }

    setPrimaryPhysician(name: string) {
        this.primaryPhyscian = name;
    }

    getPrimaryPhysician() {
        return this.primaryPhyscian;
    }

    setEmail(email: string) {
        this.email = email;
    }

    getEmail() {
        return this.email;
    }

    setAddress(address: Address) {
        this.address = address;
    }

    getAddress() {
        return this.address;
    }

    setEncounters(encounters: Encounter[]) {
        this.encounters = encounters;
    }

    getEncounters() {
        return this.encounters;
    }

    setInsurances(insurances: Insurance[]) {
        this.insurances = insurances;
    }

    getInsurances(){
        return this.insurances;
    }
}