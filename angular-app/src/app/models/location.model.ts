export class Location{
    public id:string;
    public name: string;
    public postalCode: number;
    public imageUrl: string;

    constructor(id:string,name:string,postalCode:number,imgUrl:string){
        this.id=id;
        this.name=name;
        this.postalCode=postalCode;
        this.imageUrl=imgUrl;
    }
}