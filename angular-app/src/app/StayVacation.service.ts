import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Params } from '@angular/router';
import { Accomodation } from './models/Accomodation.model';
import { Location } from './models/location.model';
import { Reservation } from './models/Reservation.model';

@Injectable({providedIn:'root'})
export class StayVacationService{
    constructor(private http:HttpClient){}
    createAndStoreAccommodation(accommodation:Accomodation){
       
    return this.http
    .post<Accomodation>
    ('https://devcademy.herokuapp.com/api/Accomodations',accommodation)
    }
    createAndStoreReservation(reservation:Reservation){
        this.http
        .post<Reservation>
        ('https://devcademy.herokuapp.com/api/Reservation',reservation).subscribe()
    }
    fetchAccommodations(){
    
        return this.http.
        get<Accomodation[]>
        ('https://devcademy.herokuapp.com/api/Accomodations')
   
    }
    fetchAccommodation(id?:string){
        return this.http
        .get<Accomodation>(`https://devcademy.herokuapp.com/api/Accomodations/${id}`)
    }

    fetchLocations(){
        return this.http.
        get<Location[]>
        ('https://devcademy.herokuapp.com/api/Location')
   
    }
    deleteAccommodation(id:string){
        return this.http
        .delete<Accomodation>(`https://devcademy.herokuapp.com/api/Accomodations/${id}`)
    }
    fetchReccommendations(){
        return this.http
        .get<Accomodation[]>
        ('https://devcademy.herokuapp.com/api/Accomodations/recommendation')
    }
    fetchAccommodationLocation(id:Params){
        
        return this.http
        .get<Accomodation[]>
        (`https://devcademy.herokuapp.com/api/Accomodations/location`,{params:id})


    }
    fetchReservations(){
        return this.http
        .get<Reservation[]>
        ('https://devcademy.herokuapp.com/api/Reservation')

    }
    
    updateLocation(id:string,location:Location){
        return this.http
        .put(`https://devcademy.herokuapp.com/api/Location/${id}`,location)
        
    }
    updateAccommodation(id:string,accommodation:Accomodation){
        return this.http
        .put(`https://devcademy.herokuapp.com/api/Accomodations/${id}`,accommodation)
        
    }
    


}