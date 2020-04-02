import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-informative',
  templateUrl: './informative.component.html',
  styleUrls: ['./informative.component.css']
})
export class InformativeComponent implements OnInit {

  breakpoint: number;

  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 500) ? 1 : ( (window.innerWidth <= 1200)? 2 : 5 );
  }
  
}
