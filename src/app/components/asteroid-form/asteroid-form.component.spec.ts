import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsteroidFormComponent } from './asteroid-form.component';

describe('AsteroidFormComponent', () => {
  let component: AsteroidFormComponent;
  let fixture: ComponentFixture<AsteroidFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsteroidFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsteroidFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
