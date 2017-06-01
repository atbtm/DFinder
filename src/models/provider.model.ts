import {Address} from './address.model';

export class Provider {
    constructor(private name:string, private address:Address, private phone:string, private rating:string, private price:string){

    }

    setName(name:string){
        this.name = name;
    }

    setAddress(address:Address){
        this.address = address;
    }
    setPhone(phone:string){
        this.phone = phone;
    }

    setRating(rating:string){
        this.rating = rating;
    }
    setPrice(price:string){
        this.price= price;
    }
}