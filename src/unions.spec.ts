import { Time } from "./unions";

test("string parsing to work", () => {
  const time = Time.parse("01:30");
  expect(time.hour).toBe(1);
  expect(time.minute).toBe(30);
});

test("object parsing to work", () => {
  const time = Time.parse({ hour: 1, minute: 30 });
  expect(time.hour).toBe(1);
  expect(time.minute).toBe(30);
});

test("time parsing to work", () => {
  const time = Time.parse(new Time(1, 30));
  expect(time.hour).toBe(1);
  expect(time.minute).toBe(30);
});

test("minute time comparison to work", () => {
  const time1 = new Time();
  const time2 = new Time(0, 30);
  expect(time1.isLesserThan(time2)).toBeTruthy();
  expect(time1.isGreaterThan(time2)).toBeFalsy();
  expect(time1.isEqual(time2)).toBeFalsy();
});

test("hour time comparison to work", () => {
  const time3 = new Time();
  const time4 = new Time(1, 0);
  expect(time3.isLesserThan(time4)).toBeTruthy();
  expect(time3.isGreaterThan(time4)).toBeFalsy();
  expect(time3.isEqual(time4)).toBeFalsy();
});

test("meridian to be different for am/pm", () => {
  expect(new Time(14, 0).meridian).not.toEqual(new Time(10, 0).meridian);
});
