import { ScreenSize } from "./models";

// I should be a union
type TimeLike = any;

// I should be an enum
type Meridian = any;

// I should use ScreenSize to get screen names
type ScreenName = any;

export function getTemplate(size: ScreenSize): string {
  return "";
}

export class Time {
  constructor(public hour: number = 0, public minute: number = 0) {}

  static parse(raw: TimeLike): Time {
    return new Time();
  }

  isGreaterThan(other: TimeLike): boolean {
    const parsed = Time.parse(other);
    return true;
  }

  isLesserThan(other: TimeLike): boolean {
    const parsed = Time.parse(other);
    return true;
  }

  isEqual(other: TimeLike): boolean {
    const parsed = Time.parse(other);
    return true;
  }

  get meridian(): Meridian {
    return;
  }

  toString(): string {
    const hour = this.padTime(this.hour % 12 || 12);
    const minute = this.padTime(this.minute);
    const meridian = this.meridian;
    return `${hour}:${minute}${meridian}`;
  }

  private padTime(value: number): string {
    return value.toString().padStart(2, "0");
  }
}

export function getScreenName(size: ScreenSize): ScreenName {}

export function main(): void {
  // @ts-ignore-next-line
  console.log(getTemplate(ScreenSize.lg));

  const time1 = new Time();
  const time2 = new Time(0, 30);
  console.log("I should evaluate to `true`:", time1.isLesserThan(time2));
  console.log("I should evaluate to `false`:", time1.isGreaterThan(time2));
  console.log("I should evaluate to `false`:", time1.isEqual(time2));

  const time3 = new Time();
  const time4 = new Time(1, 0);
  console.log("I should evaluate to `true`:", time3.isLesserThan(time4));
  console.log("I should evaluate to `false`:", time3.isGreaterThan(time4));
  console.log("I should evaluate to `false`:", time3.isEqual(time4));

  console.log(
    "Bonus: I should be formatted similar to `02:00pm`:",
    new Time(14, 0).toString()
  );

  // @ts-ignore-next-line
  console.log(getScreenName(ScreenSize.lg));
}
