import { Time } from "./time-file";

export class ClockData extends EventTarget {
  private time: any = null;
  private event: Event = new Event("TimeChanged", {
    bubbles: true,
    cancelable: false,
  });

  get clockTime(): Time {
    if (this.time === null) {
      //console.log("Get time...");
      const data = new Date();
      return new Time(data.getHours(), data.getMinutes(), data.getSeconds());
    } else {
      //console.log("Get time from cache...");
      return this.time.clone();
    }
  }

  set clockTime(value: Time) {
    this.time = value.clone();
    this.dispatchEvent(this.event);
  }
}
