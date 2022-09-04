import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-asteroid-form',
  templateUrl: './asteroid-form.component.html',
  styleUrls: ['./asteroid-form.component.scss']
})
export class AsteroidFormComponent implements OnInit {

  asteroidForm = this.formBuilder.group({
    startDate: new Date(),
    endDate: new Date(),
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    startDate = '';

    if(this.asteroidForm.value.startDate) {
      var dds = String(this.asteroidForm.value.startDate.getDate()).padStart(2, '0');
      var mms = String(this.asteroidForm.value.startDate.getMonth() + 1).padStart(2, '0');
      var yyyys = this.asteroidForm.value.startDate.getFullYear();
  
      var startDate = yyyys + '-' + mms + '-' + dds;
    }
   
    endDate = '';

    if(this.asteroidForm.value.endDate) {
      var dde = String(this.asteroidForm.value.endDate.getDate()).padStart(2, '0');
      var mme = String(this.asteroidForm.value.endDate.getMonth() + 1).padStart(2, '0');
      var yyyye = this.asteroidForm.value.endDate.getFullYear();
  
      var endDate = yyyye + '-' + mme + '-' + dde;
    }
    
    this.router.navigate(['/asteroids', {startDate, endDate}]);
  }
}
