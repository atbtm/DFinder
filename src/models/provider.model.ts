import { Address } from './address.model';
import { Procedure } from './procedure.model';

export class Provider {
    constructor(public id: string, 
                public name: string, 
                public lat:string, 
                public lng:string, 
                public address: Address,
                public rating: string, 
                public procedures:any){

    }
    hasProcedure(name:string) {
        return true; 
    }
  
    getFilteredProcedure() {
        return this.procedures.price;
    }
    setName(name:string){
        this.name = name;
    }

    setAddress(address:Address){
        this.address = address;
    }

    setRating(rating:string){
        this.rating = rating;
    }
    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }
    getProcedures() {
        return JSON.stringify(this.procedures);
    }
}