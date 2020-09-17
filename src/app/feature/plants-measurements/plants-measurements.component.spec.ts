import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsMeasurementsComponent } from './plants-measurements.component';

describe('PlantsMeasurementsComponent', () => {
  let component: PlantsMeasurementsComponent;
  let fixture: ComponentFixture<PlantsMeasurementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantsMeasurementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsMeasurementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
