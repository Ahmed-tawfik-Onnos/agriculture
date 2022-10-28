import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  
  logOut(){
    localStorage.removeItem("token");
    this.router.navigateByUrl("/login");
  }
  showMenuItem():boolean|Observable<boolean>{
    let token=localStorage.getItem("token");
    if(token){
      return true;
    }
    return false;
  }
  constructor(private router:Router) {}


  
  

  ngOnInit(): void {
  }

}
