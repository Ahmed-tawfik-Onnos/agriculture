import { Component, OnInit } from '@angular/core';
import { TrendingApiService } from '../trending-api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies:any[]=[];
  constructor(trendingMovies:TrendingApiService) {
    trendingMovies.getTrending("all").subscribe((observer)=>{
      this.movies=observer.results.filter((item:any)=>{
        return item.media_type=="movie";
      });
      
    });
   }

   
  ngOnInit(): void {
  }

}
