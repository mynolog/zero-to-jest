import { CustomError } from "./throwFunction";
import { error, customError } from "./throwFunction";

test("error가 발생하는지 테스트", () => {
  expect(() => error()).toThrow(Error);
  expect(() => customError()).toThrow(CustomError);
});

test("error가 발생하는지 테스트 (try/catch)", () => {
  try {
    error();
  } catch (err) {
    expect(err).toStrictEqual(new Error());
  }
});
