import { after3days } from "./date";

test("3일 후를 리턴한다.", () => {
  jest.useFakeTimers().setSystemTime(new Date(2025, 3, 17));
  expect(after3days()).toStrictEqual(new Date(2025, 3, 20));
});

afterEach(() => {
  jest.useRealTimers();
});
