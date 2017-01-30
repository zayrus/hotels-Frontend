import { Injectable } from '@angular/core'
import { Headers, Http, Response } from '@angular/http'

import 'rxjs/add/operator/toPromise'

import { Hotel } from './shared/models/hotel'

@Injectable()
export class HotelService {
  private hotelsUrl = 'http://localhost:10010/hotels'  // URL to web api

  constructor(private http: Http) { }

  getHotels(): Promise<Hotel[]> {
    return this.http
      .get(this.hotelsUrl)
      .toPromise()
      .then(response => { 
        return response.json() as Hotel[]
      })
      .catch(this.handleError)
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error)
  }
}

