import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PopupservicesService } from '../popupservices.service';

@Component({
  selector: 'app-popup-design',
  templateUrl: './popup-design.component.html',
  styleUrls: ['./popup-design.component.css']
})
export class PopupDesignComponent implements OnInit {
  @Output() show = new EventEmitter<boolean>();
  SecondPopup: boolean = false;
  firstPopup: boolean = true;
  constructor(private servicespop: PopupservicesService) { }

  ngOnInit() {
    this.firstPopup = true;
    this.backbutton();
    this.nextbutton();
  }

  backbutton(){
    this.firstPopup = true;                                                                                                                                                                                                                                                                                                                                                                               
    this.SecondPopup = false;
  }

  nextbutton(){
  this.show.emit(true);
  this.firstPopup = false;
  this.SecondPopup = true;
  }

}
