import { ClockData } from "../model/clock-data";

export abstract class AbstractClockView {
  protected __data: ClockData;
  constructor(data: ClockData) {
    this.__data = data;
    this.__data.addEventListener("TimeChanged", this.onTimeChange.bind(this));
  }

  protected onTimeChange(event: Event): void {
    //Method placeholder
  }
}
