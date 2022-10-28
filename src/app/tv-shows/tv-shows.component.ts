import { Component, OnInit } from '@angular/core';
import { TrendingApiService } from '../trending-api.service';


@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {

  tvShows:any[]=[];
  constructor(trendingTvShows:TrendingApiService) {
    trendingTvShows.getTrending("all").subscribe((observer)=>{
      this.tvShows=observer.results.filter((item:any)=>{
        return item.media_type=="tv";
      })
    })
   }

  ngOnInit(): void {
  }

}
