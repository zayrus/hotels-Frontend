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
  allStars: number = 0
  fiveStars: number = 0
  fourStars: number = 0
  threeStars: number = 0
  twoStars: number = 0
  oneStar: number = 0

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
        this.minPriceFounded = modHotels[0].price
        this.rangeValues = [ this.minPriceFounded, this.maxPriceFounded ]
        return this.hotels = modHotels
      })
      .catch(error => this.error = error)
  }
  
  fillStars(hotels, len) {
    let i
    this.allStars = len

    for ( i = 0; i < len; i++) {
      switch (hotels[i].stars) {
        case 5:
          this.fiveStars++
          break
        case 4:
          this.fourStars++
          break
        case 3:
          this.threeStars++
          break
        case 2:
          this.twoStars++
          break
        case 1:
          this.oneStar++
          break
      }
      
      let starsArr = new Array(hotels[i].stars)
      hotels[i].stars = starsArr
    }
    return hotels
  }
  
  ngOnInit(): void {
    this.getHotels()
  }
   
}

