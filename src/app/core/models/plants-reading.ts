import { PlantsReadingsDto } from "./dtos/plants-reading.dto";

export class PlantsReadings {
    sensor: number;
    humidity: number;
    last_watered: number;

 
    constructor(plantReading?: PlantsReadingsDto) {
        this.sensor= plantReading && plantReading.sensor || null;
        this.humidity= plantReading && plantReading.humidity || null;
        this.last_watered=  null;
    }

}