import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
   

  constructor() { 

     $(document).ready(function(){
       $("#profile-dropdown").hover(function(){
         $("#profile-dropdown-container").toggle();
       });
     });

     $(document).ready(function(){
       $("#faclities-dropdown").hover(function(){
         $("#faclities-dropdown-container").toggle();
       });
     });

     $(document).ready(function(){
       $("#products-dropdown").hover(function(){
         $("#products-dropdown-container").toggle();
       });
     });

     $(document).ready(function(){
       $("#Food-dropdown").hover(function(){
         $("#Food-dropdown-container").toggle();
       });
     });

     $(document).ready(function(){
       $("#Organic-dropdown").hover(function(){
         $("#Organic-dropdown-container").toggle();
       });
     });

     $(document).ready(function(){
       $("#Contact-dropdown").hover(function(){
         $("#Contact-dropdown-container").toggle();
       });
     });
    
  }
  ngOnInit(): void {}
  
}
