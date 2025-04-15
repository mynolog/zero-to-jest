import { obj } from "./toMatchObject";

test("클래스의 동등 비굔느 toMatchObject로 수행해야 한다.", () => {
  expect(obj("hello")).toMatchObject({ a: "hello" });
  expect(obj("hello")).not.toStrictEqual({ a: "hello" });
});
