import { first, second, third } from "./order";

test("first -> second -> third 순서로 호출되는지 테스트", () => {
  const mockFirst = jest.fn(first);
  const mockSecond = jest.fn(second);
  const mockThird = jest.fn(third);

  mockFirst();
  mockSecond();
  mockThird();

  expect(mockFirst.mock.invocationCallOrder[0]).toBeLessThan(
    mockSecond.mock.invocationCallOrder[0]
  );
  expect(mockThird.mock.invocationCallOrder[0]).toBeGreaterThan(
    mockSecond.mock.invocationCallOrder[0]
  );
});

test("first -> second -> third 순서로 호출되는지 테스트 (jest-extended)", () => {
  const mockFirst = jest.fn(first);
  const mockSecond = jest.fn(second);
  const mockThird = jest.fn(third);

  mockFirst();
  mockSecond();
  mockThird();

  expect(mockFirst).toHaveBeenCalledBefore(mockSecond);
  expect(mockThird).toHaveBeenCalledAfter(mockSecond);
});
