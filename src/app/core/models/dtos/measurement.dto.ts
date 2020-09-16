import { PlantsReadingsDto } from "./plants-reading.dto";

export interface MeasurmentDto {
    id: number;
    time: number;
    plantsReading: PlantsReadingsDto[];
    waterLevel: number;
    temperature: number;
    humidity: number;
    asdad: number;
}