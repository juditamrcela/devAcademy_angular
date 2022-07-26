import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { LocationsComponent } from './locations/locations.component';
import { AccomodationDetailsComponent } from './accomodation-details/accomodation-details.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { MyPlacesComponent } from './my-places/my-places.component';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllLocationsComponent } from './all-locations/all-locations.component';
import {MatSelectModule} from '@angular/material/select';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MyAccommodationFormComponent } from './my-accommodation-form/my-accommodation-form.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxInputStarRatingModule } from '@ngx-lite/input-star-rating';
import { MyPlaceBoxComponent } from './my-place-box/my-place-box.component';
import { BookPlaceFormComponent } from './book-place-form/book-place-form.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './login/auth.guard';
//import { NgbRatingModule} from '@ng-bootstrap/ng-bootstrap'; 


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    RecommendationsComponent,
    FavoritesComponent,
    LocationsComponent,
    AccomodationDetailsComponent,
    AccommodationComponent,
    MyPlacesComponent,
    MyBookingComponent,
    AllLocationsComponent,
    MyAccommodationFormComponent,
    HomeComponent,
    LocationComponent,
    PageNotFoundComponent,
    MyPlaceBoxComponent,
    BookPlaceFormComponent,
    LoginComponent
   

  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    NgSelectModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatSlideToggleModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    NgxInputStarRatingModule,
    HttpClientModule,
    MatCheckboxModule

   
    
    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
