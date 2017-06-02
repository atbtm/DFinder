export class Address {
    constructor(private stAddres:string, private city: string, private zip:string, private state:string, private phoneNo:string){

    }

    setStAddress(stAddress:string){
        this.stAddres = stAddress;
    }

    getStAddress() {
        return this.stAddres;
    }

    setZip(zip:string){
        this.zip = zip;
    }

    getZip() {
        return this.zip;
    }
    setState(state:string){
        this.state = state;
    }

    getState() {
        return this.state;
    }
    setPhoneNo(phoneNo:string){
        this.phoneNo = phoneNo;
    }

    getPhoneNo() {
        return this.phoneNo;
    }

    setCity(city: string) {
        this.city = city;
    }

    getCity() {
        return this.city;
    }
}
