import { TestBed } from '@angular/core/testing';

import { MealDataService } from './meal-data.service';

describe('MealDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MealDataService = TestBed.get(MealDataService);
    expect(service).toBeTruthy();
  });
});
