import { PlantsReadings } from './plants-reading';
import { MeasurmentDto } from './dtos/measurement.dto';
import { PlantsReadingsDto } from './dtos/plants-reading.dto';


export class Measurement {
    
    time: number;
    plantsReading: PlantsReadings[];
    waterLevel: number;
    temperature: number;
    humidity: number;

    constructor( measurement?: MeasurmentDto){
        this.time = measurement && measurement.time || Date.now();
        this.plantsReading = measurement && measurement.plantsReading.map((x: PlantsReadingsDto) => new PlantsReadings(x)) || null  
        this.waterLevel = measurement && measurement.waterLevel || null;
        this.temperature = measurement && measurement.temperature || null;
        this.humidity = measurement && measurement.humidity || null;
    }

}