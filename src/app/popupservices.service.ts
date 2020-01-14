import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupservicesService {

  private thisMessage = new Subject<string>();
  mainMessage = this.thisMessage.asObservable();

  constructor() { }

  sendMessage(message: string){
    this.thisMessage.next(message);
  }
}
