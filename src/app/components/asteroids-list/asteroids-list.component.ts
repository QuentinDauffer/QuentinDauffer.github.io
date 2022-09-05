import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatPaginator, PageEvent} from '@angular/material/paginator';

import { Asteroid, AsteroidsService } from '../../services/asteroids.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface AsteroidData {
  id: number;
  name: string;
  is_potentially_hazardous_asteroid: boolean;
  is_sentry_object: boolean;
}

@Component({
  selector: 'app-asteroids-list',
  templateUrl: './asteroids-list.component.html',
  styleUrls: ['./asteroids-list.component.scss']
})
export class AsteroidsListComponent implements OnInit {

  @ViewChild(MatPaginator) 
  paginator!: MatPaginator;

  dataSource!: MatTableDataSource<AsteroidData>;
  dates: any;
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

      let asteroidsList: AsteroidData[] = [];
      this.asteroidsService.getAsteroidsList(this.startDate, this.endDate).subscribe(retour => {
        asteroidsList = [].concat.apply([], Object.values(retour.near_earth_objects));
        this.dataSource = new MatTableDataSource<AsteroidData>(asteroidsList);
        this.dataSource.paginator = this.paginator;
      });
    }

  ngOnInit() {
  }
}
