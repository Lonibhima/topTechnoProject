import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupDesignComponent } from './popup-design/popup-design.component';
import { PopupservicesService } from './popupservices.service';
import { RouterModule } from '@angular/router';
import { JoyrideModule } from 'ngx-joyride'

@NgModule({
  declarations: [
    AppComponent,
    PopupDesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JoyrideModule.forRoot(),
  	RouterModule.forRoot([]),
  ],
  providers: [PopupservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
