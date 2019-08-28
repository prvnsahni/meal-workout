import { TestBed } from '@angular/core/testing';

import { WorkoutDataService } from './workout-data.service';

describe('WorkoutDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkoutDataService = TestBed.get(WorkoutDataService);
    expect(service).toBeTruthy();
  });
});
