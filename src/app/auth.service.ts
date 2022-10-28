import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { }
  registerApi(registerdValues:any):Observable<any>{
    return this._http.post("https://routeegypt.herokuapp.com/signup",registerdValues);
  }
  loginApi(loginValues:any):Observable<any>{
    return this._http.post("https://routeegypt.herokuapp.com/signin",loginValues);
  }
  logoutApi(logoutaken:any):Observable<any>{
    return this._http.post("https://routeegypt.herokuapp.com/signOut",logoutaken);
  }
}
