export class Insurance {
    
    constructor(private groupid:string, private planName:string, private rxID:string){

    }
    setGroupId(groupid:string){
        this.groupid = groupid;
    }

    setPlanName(planName:string){
        this.planName = planName;
    }

    setRxID(rxID:string){
        this.rxID = rxID;
    }
}