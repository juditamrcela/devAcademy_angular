enum type{
    "Room",
    "Apartment",
    "MobileHome"
};
export class Accomodation{
   
    public id:string;
    public title:string;
    public subtitle:string;
    public description:string;
    public type: type;
    public categorization:number;
    public personCount:number;
    public imageUrl:string;
    public freeCancelation:boolean;
    public price:number;
    public locationId:string;

    constructor(id:string,title:string,subtitle:string,descript:string,type:type,categor:number,perCount:number,imgUrl:string,freeCancl:boolean,price:number,locationId:string){
        this.id=id;
        this.title=title;
        this.subtitle=subtitle;
        this.description=descript;
        this.type=type;
        this.categorization=categor;
        this.personCount=perCount;
        this.imageUrl=imgUrl;
        this.freeCancelation=freeCancl;
        this.price=price;
        this.locationId=locationId;
    }

}