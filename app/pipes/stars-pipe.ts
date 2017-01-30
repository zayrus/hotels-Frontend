import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'StarsPipe'
})

export class StarsPipe {
  transform(value, args?) {
    if (value == null) {
      return null
    }
    let stars = args
    return value.filter(hotel => {
      if ( stars == undefined) {
        return hotel.stars   
      } else {
        return hotel.stars.length >= stars
      }
    })
  }
}

