import { Profile } from '../models/profile.model';

export class Person  {
    
    constructor(private name:string, private dob:string, private gender:string, private id:string, private profile: Profile){

    }

    setName(name:string){
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setDOB(dob:string){
        this.dob = dob;
    }

    getDOB(){
        return this.dob;
    }

    setGender(gender:string){
        this.gender= gender;
    }

    getGender(){
        return this.gender;
    }

    setID(id:string){
        this.id = id;
    }

    getID(){
        return this.id;
    }

    setProfile(profile: Profile) {
        this.profile = profile;
    }

    getProfile() {
        return this.profile;
    }
}