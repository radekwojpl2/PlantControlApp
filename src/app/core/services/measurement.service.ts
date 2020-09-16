import { MeasurmentDto } from './../models/dtos/measurement.dto';
import { Measurement } from './../models/measurement';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MeasurementService {

  private ulr = 'http://localhost:3000/measurements';  // URL to web api


  constructor( private http: HttpClient) { }


  getMeasurement() {
    return this.http.get<MeasurmentDto[]>(this.ulr).pipe(
      map(x => x.map((value: MeasurmentDto) => new Measurement(value)))
    )
  }
}
