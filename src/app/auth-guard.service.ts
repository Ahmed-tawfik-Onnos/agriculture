import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  canActivate():boolean|Observable<boolean>{
    let token=localStorage.getItem("token");
    if(token){
      return true;
    }
    this.router.navigateByUrl("/login");
    return false;
  }
  constructor(private router:Router) { }
}
