import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AccomodationDetailsComponent } from './accomodation-details/accomodation-details.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LocationsComponent } from './locations/locations.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FavoritesComponent,
    AccomodationDetailsComponent,
    FooterComponent,
    HeaderComponent,
    LocationsComponent,
    RecommendationsComponent
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
