export class Location{
    
    constructor(
        public id:string,
        public imageUrl: string | null,
        public name: string | null,
        public postalCode: number,
        public properties:number){}
}