import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuriosityImageListComponent } from './curiosity-image-list.component';

describe('CuriosityImageListComponent', () => {
  let component: CuriosityImageListComponent;
  let fixture: ComponentFixture<CuriosityImageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuriosityImageListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuriosityImageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
