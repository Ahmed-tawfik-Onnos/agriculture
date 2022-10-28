import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingApiService } from '../trending-api.service';
ActivatedRoute
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  type:any;
  id:any;
  imaSrc:any;
  title:string='';
  name:string='';
  overview:string='';
  genres:any[]=[];
  voteAvg:number=0;
  voteCount:number=0;
  releaseDate:string='';
  popularity:number=0;
  tagLine:string='';
  constructor(private detailsApi:TrendingApiService,private activatedRout:ActivatedRoute) {
    this.type=activatedRout.snapshot.paramMap.get("type");
    this.id=activatedRout.snapshot.paramMap.get("id");
    detailsApi.getDetails(this.type,this.id).subscribe((data)=>{
      console.log(data)
      this.imaSrc="https://image.tmdb.org/t/p/original/"+data.poster_path;
      this.name=data.name;
      this.title=data.title;
      this.overview=data.overview;
      this.genres=data.genres;
      this.voteAvg=data.vote_average;
      this.voteCount=data.vote_count;
      this.releaseDate=data.release_date;
      this.popularity=data.popularity;
      this.tagLine=data.tagLine;
      


    });
  }

  ngOnInit(): void {
  }

}
