enum type{
    "Suite",
    "Room",
    "Apartment",
    "MobileHome"
};
export class Reservation{
   

    constructor(
        public email:string,
        public accomodationId:string,
        public accomodation:Accomodation,
        public checkIn:string,
        public checkOut:string,
        public personsCount:number,
        public confirmed:boolean){
       
    }
}
export class Accomodation{


    constructor(public id:string, 
        public title:string, 
        public subtitle:string, 
        public description:string,
        public shortDescription:string,
        public type:type, 
        public categorization:number,
        public personCount:number, 
        public imageUrl:string | null,
        public freeCancelation:boolean, 
        public price:number,
        public location: Location | null,
        public locationId:string,
        public capacity:number){
        
    }

}
export class Location{
    
    constructor(
        public id:string,
        public name: string,
        public postalCode: number,
        public imageUrl: string | null,
        public properties:number){}
}