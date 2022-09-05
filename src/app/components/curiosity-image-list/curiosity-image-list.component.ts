import { Component, OnInit } from '@angular/core';

import { AsteroidsService } from '../../services/asteroids.service';

export interface CuriosityImages {
  photos: any,
}

@Component({
  selector: 'app-curiosity-image-list',
  templateUrl: './curiosity-image-list.component.html',
  styleUrls: ['./curiosity-image-list.component.scss']
})
export class CuriosityImageListComponent implements OnInit {
  curiosityImages!: CuriosityImages;
  currentDate: string;

  constructor(private asteroidsService: AsteroidsService) { 
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
  
    this.currentDate = yyyy + '-' + dd + '-' + mm;
  }

  ngOnInit(): void {
    this.asteroidsService.getCuriosityImageOfTheDay(this.currentDate).subscribe(retour => {this.curiosityImages = retour});
  }

}

