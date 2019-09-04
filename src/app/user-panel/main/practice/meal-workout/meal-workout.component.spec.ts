import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealWorkoutComponent } from './meal-workout.component';

describe('MealWorkoutComponent', () => {
  let component: MealWorkoutComponent;
  let fixture: ComponentFixture<MealWorkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealWorkoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
