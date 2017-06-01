export class Address {
    constructor(private stAddres:String, private zip:string, private state:string, private phoneNo:string){

    }

    setStAddress(stAddress:string){
        this.stAddres = stAddress;
    }
    setZip(zip:string){
        this.zip = zip;
    }
    setState(state:string){
        this.state = state;
    }
    setPhoneNo(phoneNo:string){
        this.phoneNo = phoneNo;
    }
}
