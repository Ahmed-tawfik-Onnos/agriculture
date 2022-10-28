import { Component, OnInit } from '@angular/core';
import {TrendingApiService} from '../trending-api.service';
import { NgxSpinnerService } from "ngx-spinner";
import Typed from 'typed.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies:any[]=[];
  tvShows:any[]=[];
  constructor(trending:TrendingApiService,private spinner: NgxSpinnerService) {
    
    trending.getTrending("all").subscribe((observer)=>{
      this.movies=observer.results.filter((item:any)=>{
       return item.media_type=="movie"
      });
      this.tvShows=observer.results.filter((item:any)=>{
        return item.media_type=="tv"
       });
       
    })
    
   }
   
  ngOnInit(): void {
    const options = {
      strings: [
        'Trinding <br> Movies <br> To Watch Now',
        'Segment<br>Omnichannel<br>Automation',
        'Data Science<br> Personalisation<br>Machine learning'],
      typeSpeed: 100,
      backSpeed: 20,
      showCursor: true,
      cursorChar: '|',
      loop: true
    };
    const typed = new Typed('.typed-element', options);
  }
}
  




