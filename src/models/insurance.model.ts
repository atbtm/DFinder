export class Insurance {
    
    constructor(private groupid:string, private planName:string, private rxID:string){

    }
    setGroupId(groupid:string){
        this.groupid = groupid;
    }

    getGroupId(){
        return this.groupid;
    }

    setPlanName(planName:string){
        this.planName = planName;
    }

    getPlanName(){
        return this.planName;
    }

    setRxID(rxID:string){
        this.rxID = rxID;
    }

    getRxID(){
        return this.rxID;
    }
}