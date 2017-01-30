import { Component, OnInit } from '@angular/core'

import { Hotel } from './shared/models/hotel'
import { HotelService } from './app.service'
import { PricePipe } from './pipes/price-pipe'
import { NamePipe } from './pipes/name-pipe'

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})

export class AppComponent implements OnInit {
  error: any
  showNgFor = false
  searchValue: string = ''
  rangeValues: number[] = [500,2000]
  minPriceFounded: number = 0
  maxPriceFounded: number = 0

  constructor(
    private hotelService: HotelService) { }
  
  processRanges(e) {
    let op: number[] = [0, 0]
    op[0] = e.values[0]
    op[1] = e.values[1]
    return op
  }  
  
  hotels: Hotel[] 
  getHotels(): void {
    this.hotelService
      .getHotels()
      .then( hotels => { 
        return this.fillStars(hotels, hotels.length)
      })
      .then( modHotels => {
        this.maxPriceFounded = modHotels[modHotels.length -1].price
        return this.hotels = modHotels
      })
      .catch(error => this.error = error)
  }
  
  fillStars(hotels, len) {
    let i
    for ( i = 0; i < len; i++) {
      let starsArr = new Array(hotels[i].stars)
      hotels[i].stars = starsArr
    }
    return hotels
  }
  
  ngOnInit(): void {
    this.getHotels()
  }
   
}

