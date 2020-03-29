import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  breakpoint: number;

  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 500) ? 1 : ( (window.innerWidth <= 1200)? 2 : 5 );
  }
  
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 500) ? 1 : ( (event.target.innerWidth <= 1200)? 2 : 5 );
  }

}
