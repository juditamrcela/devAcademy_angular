import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';
import { AllLocationsComponent } from 'app/all-locations/all-locations.component';
import { HomeComponent } from 'app/home/home.component';
import { MyPlacesComponent } from 'app/my-places/my-places.component';
import { MyBookingComponent } from 'app/my-booking/my-booking.component';
import { LocationComponent } from 'app/location/location.component';
import { RecommendationsComponent } from 'app/recommendations/recommendations.component';
import { MyAccommodationFormComponent } from 'app/my-accommodation-form/my-accommodation-form.component';
import { PageNotFoundComponent } from 'app/page-not-found/page-not-found.component';
import { AccomodationDetailsComponent } from 'app/accomodation-details/accomodation-details.component';


const appRoutes: Routes=[
  { path: '', component: HomeComponent },
  { path: 'locations', component: AllLocationsComponent },
  {path: 'locations/:id',component:LocationComponent},
  { path: 'myPlaces', component: MyPlacesComponent },
  { path: 'myBookings', component: MyBookingComponent },
  {path:'recommendations',component:RecommendationsComponent},
  {path:'myPlaces/add-new',component:MyAccommodationFormComponent},
  {path:'myPlaces/edit/:id',component:MyAccommodationFormComponent},
  {path:'accommodation/:id',component:AccomodationDetailsComponent},
  {path:'not-found',component: PageNotFoundComponent},
  {path:'**',redirectTo:'/not-found'}
  
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
