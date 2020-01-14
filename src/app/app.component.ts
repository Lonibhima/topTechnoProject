import { Component, Input, OnInit } from '@angular/core';
import { JoyrideService }from 'ngx-joyride';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @Input() show: boolean = false;
  title = 'siteWalkthrough';

  constructor( private readonly joyrideService: JoyrideService){

  }

  ngOnInit() {
    this.nextbutton();
    this.onClick();
  }

  onClick() {
    this.joyrideService.startTour(
      { steps: ['firstStep', 'secondStep', 'thirdStep', 'FourthStep']} // Your steps order
    );
  }


  nextbutton() {
    console.log(this); 
    this.show = true;
    console.log(this.show); 
}
}
