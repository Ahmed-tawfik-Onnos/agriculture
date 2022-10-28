import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PeopleComponent } from './people/people.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";
import {NgxTypedJsModule} from 'ngx-typed-js';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PeopleComponent,
    HomeComponent,
    MoviesComponent,
    TvShowsComponent,
    NavbarComponent,
    LoginComponent,
    RegisterationComponent,
    NotFoundComponentComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    NgxTypedJsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
