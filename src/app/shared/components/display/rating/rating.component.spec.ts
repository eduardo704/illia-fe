import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingComponent } from './rating.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingComponent, FontAwesomeModule, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingComponent);

    component = fixture.componentInstance;
    component.rating={
      count:10,
      rate:4.5
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
