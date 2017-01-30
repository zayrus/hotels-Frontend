import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'NamePipe'
})

export class NamePipe {
  transform(value, args?) {
    if (value == null) {
      return null
    }
    let searchName = args
    return value.filter(hotel => {
      if (searchName == '') {
        return searchName != hotel.name
      } else {
        return searchName == hotel.name
      }
    })
  }
}

