import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import {FormsModule} from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { LocationsComponent } from './locations/locations.component';
import { AccomodationDetailsComponent } from './accomodation-details/accomodation-details.component';
=======

import { AppComponent } from './app.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AccomodationDetailsComponent } from './accomodation-details/accomodation-details.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LocationsComponent } from './locations/locations.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
>>>>>>> main

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    FooterComponent,
    HeaderComponent,
    RecommendationsComponent,
    FavoritesComponent,
    LocationsComponent,
    AccomodationDetailsComponent
=======
    FavoritesComponent,
    AccomodationDetailsComponent,
    FooterComponent,
    HeaderComponent,
    LocationsComponent,
    RecommendationsComponent
>>>>>>> main
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
