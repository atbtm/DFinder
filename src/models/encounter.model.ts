export class Encounter {

    constructor(private encStartDate:string, private encProvider:string, private encType:string, private encDx:string) {

    }

    setEncStartDate(encStartDate:string){
        this.encStartDate = encStartDate;
    }

    setEncProvider(encProvider:string){
        this.encProvider = encProvider;
    }
    setEncType(encType:string){
        this.encType = encType;
    }
    setEncDx(encDx:string){
        this.encDx = encDx;
    }
}