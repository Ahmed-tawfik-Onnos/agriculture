import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      $(".companyText").fadeIn(2000)
    });
    
  }

}
