export class Procedure {

    constructor(private code: string, private name: string, private description: string, private price: string) {

    }
    setCode(code:string){
        this.code = code;
    }
    setName(name:string){
        this.name = name;
    }
    setDescription(description:string){
        this.description = description;
    }
    setPrice(price:string){
        this.price = price;
    }
}