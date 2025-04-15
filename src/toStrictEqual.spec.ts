import { obj } from "./toStrictEqual";

test("객체의 동등 비교는 toStrictEqual로 수행해야 한다.", () => {
  expect(obj()).toStrictEqual({ a: "hello" });
  expect(obj()).not.toBe({ a: "hello" });
});

test("배열의 동등 비교는 toStrictEqual로 수행해야 한다.", () => {
  expect([1, 2, 3]).toStrictEqual([1, 2, 3]);
  expect([1, 2, 3]).not.toBe([1, 2, 3]);
});
