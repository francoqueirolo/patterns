import { ClockData } from "../model/clock-data";
import { AbstractClockView } from "./abstract-clock-view";

export class DigitalClock extends AbstractClockView {
  constructor(data: ClockData) {
    super(data);
  }

  protected onTimeChange(_event: Event): void {
    //console.log("Listen event...");
    this.draw();
  }

  draw(): void {
    const container: HTMLElement | any = document.getElementById("launcher");
    const time = this.__data.clockTime;
    const { hour, minute, second } = time;

    const format = (moment: number): string =>
      moment < 10 ? "0" + moment : String(moment);

    // console.log(hour, minute, second);
    container.innerText =
      format(hour) + " : " + format(minute) + " : " + format(second);
  }
}
