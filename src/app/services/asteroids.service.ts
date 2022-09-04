import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

export interface Asteroid {
  element_count: string,
  near_earth_objects: any,
}

export interface CuriosityImages {
  photos: any,
}

@Injectable({
  providedIn: 'root'
})
export class AsteroidsService {
  apiKey: string = 'MPfH654J7lnnj6OQpw92HTNha5cSyK6HCAczVZTa&fbclid=IwAR0dP1F4-6TASWdH4xdmJfjnJEvwr9yQoxeVJQiW6-Rp1uty1FkH0zQgcxw';

  constructor(
    private http: HttpClient
  ) { }

  getAsteroidsList(startDate: string, endDate: string): Observable<Asteroid> {
    return this.http.get<Asteroid>('https://api.nasa.gov/neo/rest/v1/feed?start_date=' + startDate + '&end_date=' + endDate + '&api_key=' + this.apiKey);
  }

  getCuriosityImageOfTheDay(date: string) {
    return this.http.get<CuriosityImages>('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=' + date + '&api_key=' + this.apiKey);
  }
}
