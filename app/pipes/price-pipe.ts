import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'PricePipe'
})

export class PricePipe {
  transform(value, args?) {

    if (value == null) {
      return null
    }

    let minToPay = args[0]
    let maxToPay = args[1]
     
    return value.filter(hotel => {
      if (maxToPay == undefined && maxToPay  == undefined) {
        minToPay = 0
        maxToPay = 2000
      }

      return (maxToPay >= hotel.price && minToPay <= hotel.price)
    })
  }
}
