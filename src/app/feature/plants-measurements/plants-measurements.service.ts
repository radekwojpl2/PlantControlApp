import { Measurement } from './../../core/models/measurement';
import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { MeasurementService } from 'src/app/core/services/measurement.service';
import { max } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlantsMeasurementsService {

  public waterLevel: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public time: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private service: MeasurementService) {}

   getAllMeasurmentsInterval(): void {
    setInterval(() => {
      this.service.getMeasurement().subscribe(
          (data: Measurement[]) => {
           this.waterLevel.next(data[data.length - 1].waterLevel);
           this.time.next(data[data.length - 1].time);
          }
        );
    }, 1000);
   }
}
