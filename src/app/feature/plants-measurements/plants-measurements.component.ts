import { PlantsMeasurementsService } from './plants-measurements.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-plants-measurements',
  templateUrl: './plants-measurements.component.html',
  styleUrls: ['./plants-measurements.component.css']
})
export class PlantsMeasurementsComponent implements OnInit, OnDestroy {

  waterLevel$: Subscription;
  waterLevel: number;

  time$: Subscription;
  time: number;

  constructor(private plantService: PlantsMeasurementsService) { }

  ngOnInit(): void {
    this.plantService.getAllMeasurmentsInterval();
    this.waterLevel$ = this.plantService.waterLevel.subscribe(x => this.waterLevel = x);
    this.time$ = this.plantService.time.subscribe(x => {this.time = x;
    });
  }

  ngOnDestroy(): void {
    this.waterLevel$.unsubscribe();
    this.time$.unsubscribe();
  }

}
