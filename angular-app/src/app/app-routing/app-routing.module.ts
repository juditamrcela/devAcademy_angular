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
import { BookPlaceFormComponent } from 'app/book-place-form/book-place-form.component';
import { LoginComponent } from 'app/login/login.component';
import { AuthGuard } from 'app/login/auth.guard';



const appRoutes: Routes=[
  { path: '', redirectTo:'home',pathMatch:'full' },
  {path: 'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  { path: 'locations', component: AllLocationsComponent ,canActivate:[AuthGuard]},
  {path: 'location',component:LocationComponent,canActivate:[AuthGuard]},
  { path: 'myPlaces', component: MyPlacesComponent,canActivate:[AuthGuard] },
  { path: 'myBookings', component: MyBookingComponent,canActivate:[AuthGuard] },
  {path:'recommendations',component:RecommendationsComponent,canActivate:[AuthGuard]},
  {path:'myPlaces/add-new',component:MyAccommodationFormComponent,canActivate:[AuthGuard]},
  {path:'myPlaces/edit/:id',component:MyAccommodationFormComponent,canActivate:[AuthGuard]},
  {path:'accommodation/:id',component:AccomodationDetailsComponent,canActivate:[AuthGuard]},
  {path:'bookPlace/:id',component:BookPlaceFormComponent,canActivate:[AuthGuard]},
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
