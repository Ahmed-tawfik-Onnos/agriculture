import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuardService } from './auth-guard.service';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { PeopleComponent } from './people/people.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';

export const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"movies",component:MoviesComponent},
  {path:"tvShows",component:TvShowsComponent,canActivate:[AuthGuardService]},
  {path:"people",component:PeopleComponent},
  {path:"about",component:AboutComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterationComponent},
  {path:"details/:type/:id",component:DetailsComponent},
  {path:"**",component:NotFoundComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
