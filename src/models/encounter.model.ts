export class Encounter {

    constructor(private encStartDate:string, private encProvider:string, private encType:string, private encDx:string) {

    }

    setEncStartDate(encStartDate:string){
        this.encStartDate = encStartDate;
    }

    getEncStartDate(){
        return this.encStartDate;
    }

    setEncProvider(encProvider:string){
        this.encProvider = encProvider;
    }

    getEncProvider(){
        return this.encProvider;
    }

    setEncType(encType:string){
        this.encType = encType;
    }

    getEncType(){
        return this.encType;
    }

    setEncDx(encDx:string){
        this.encDx = encDx;
    }

    getEncDx(){
        return this.encDx;
    }
}