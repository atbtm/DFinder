export class Person  {
    
    constructor(private name:string, private dob:string, private gender:string, private id:string){

    }

    setName(name:string){
        this.name = name;
    }
    setDOB(dob:string){
        this.dob = dob;
    }
    setGender(gender:string){
        this.gender= gender;
    }
    setImmediate(id:string){
        this.id = id;
    }
}