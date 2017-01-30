import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { MainPipe } from './main-pipe.module'
import './rxjs-extensions'
import { AppComponent } from './app.components'
import { SliderModule } from 'primeng/primeng'

import { HotelService } from './app.service'


@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    MainPipe,
    SliderModule
  ],
  declarations: [ AppComponent ],
  providers: [ HotelService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
