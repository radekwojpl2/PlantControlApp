import { TestBed } from '@angular/core/testing';

import { PlantsMeasurementsService } from './plants-measurements.service';

describe('PlantsMeasurementsService', () => {
  let service: PlantsMeasurementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantsMeasurementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
