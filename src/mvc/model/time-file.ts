export class Time {
  constructor(
    private _hour: number,
    private _minute: number,
    private _second: number
  ) {}

  set hour(hour: number) {
    this._hour = hour;
  }

  set minute(minute: number) {
    this._minute = minute;
  }

  set second(second: number) {
    this._second = second;
  }

  get hour() {
    return this._hour;
  }

  get minute() {
    return this._minute;
  }

  get second() {
    return this._second;
  }

  clone() {
    return new Time(this._hour, this._minute, this._second);
  }
}
