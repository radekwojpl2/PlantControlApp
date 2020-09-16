import { Component, OnInit } from '@angular/core';
import {MeasurementService} from './core/services/measurement.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
/**
 *
 */
constructor(private service: MeasurementService) {
  
}

  ngOnInit(): void {

    this.service.getMeasurement().subscribe(
      x => console.log(x)
    )

  }
  title = 'control-app';
}
