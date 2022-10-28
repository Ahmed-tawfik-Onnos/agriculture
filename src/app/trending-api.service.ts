import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
  providedIn: 'root'
})
export class TrendingApiService {

  constructor(private http:HttpClient,private spinner: NgxSpinnerService) { 
    
  }
  getTrending(mediaType:string):Observable<any>{
    this.spinner.show();
    return this.http.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=4fc903985cce28b3e28a2addea1192ba`);
    
  }
  getDetails(mediaType:any,id:any):Observable<any>{
    this.spinner.show();
    return this.http.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=4fc903985cce28b3e28a2addea1192ba&language=en-US`);
  }
}
