import { ClockData } from "../model/clock-data";
import { DigitalClock } from "../view/digital-clock";
import { Time } from "../model/time-file";

export class ClockTest {
  private clockData = new ClockData();

  start() {
    new DigitalClock(this.clockData);

    setInterval(() => {
      const fecha = new Date();
      const currentTime = new Time(
        fecha.getHours(),
        fecha.getMinutes(),
        fecha.getSeconds()
      );
      this.clockData.clockTime = currentTime;
    }, 1000);
  }
}
