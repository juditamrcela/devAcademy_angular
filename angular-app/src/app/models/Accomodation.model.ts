enum type{
    "Suite",
    "Room",
    "Apartment",
    "MobileHome"
};
export class Accomodation{


    constructor(public id:string, 
        public title:string | null, 
        public subtitle:string | null, 
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