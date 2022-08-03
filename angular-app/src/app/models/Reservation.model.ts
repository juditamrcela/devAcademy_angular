export class Reservation{
    public email:string;
    public accommodationId:string;
    public checkIn:string;
    public checkOut:string;
    public personsCount:number;
    public confirmed:boolean;

    constructor(email:string,accommId:string,checkIn:string,checkOut:string,personCount:number,confirmed:boolean){
        this.email=email;
        this.accommodationId=accommId;
        this.checkIn=checkIn;
        this.checkOut=checkOut;
        this.personsCount=personCount;
        this.confirmed=confirmed;
    }
}