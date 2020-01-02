import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
x="random data";
  constructor() { }

  ngOnInit() {
    this.x=this.x + " new ";
  }
  fnclick(){    
    this.x=this.x + " new ";
  }

}
