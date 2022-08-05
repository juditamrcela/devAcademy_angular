import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
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
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    NgSelectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
