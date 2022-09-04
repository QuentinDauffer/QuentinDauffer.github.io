import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AsteroidsService } from '../../services/asteroids.service';

export interface Asteroid {
  element_count: string,
  near_earth_objects: any,
}

@Component({
  selector: 'app-asteroids-list',
  templateUrl: './asteroids-list.component.html',
  styleUrls: ['./asteroids-list.component.scss']
})
export class AsteroidsListComponent implements OnInit {
  dates: any;
  asteroidsList!: any;
  displayedColumns: string[] = ['id', 'name', 'potentially_hazardous', 'is_sentry'];
  
  startDate: string;
  endDate: string;

  constructor(
    private asteroidsService: AsteroidsService,
    private route: ActivatedRoute,
    ) { 
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0');
      var yyyy = today.getFullYear();
  
      var currentDate = yyyy + '-' + mm + '-' + dd;

      let routeParams = this.route.snapshot.paramMap;
      this.startDate = routeParams.get('startDate') ?? currentDate;
      this.endDate = routeParams.get('endDate') ?? currentDate;
    }

  ngOnInit() {
    this.asteroidsService.getAsteroidsList(this.startDate, this.endDate).subscribe(retour => {this.dates = Object.keys(retour.near_earth_objects); this.asteroidsList = Object.values(retour.near_earth_objects)});
  }
}
