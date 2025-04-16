import { sum, obj } from "./toHaveBeenCalled";

test("sum 함수 호출되었다.", () => {
  const mockSum = jest.fn(sum);
  mockSum(1, 2);
  expect(mockSum).toHaveBeenCalled();
});

test("sum 함수가 1번 호출되었다.", () => {
  const mockSum = jest.fn(sum);
  mockSum(1, 2);
  expect(mockSum).toHaveBeenCalledTimes(1);
});

test("sum 함수가 1,2와 함께 호출되었다.", () => {
  const mockSum = jest.fn(sum);
  mockSum(1, 2);
  expect(mockSum).toHaveBeenCalledWith(1, 2);
});

test("object.minus 함수가 1번 호출되었다.(spy 함수 생성)", () => {
  const mockMinus = jest.fn(obj.minus);
  mockMinus(1, 2);
  expect(mockMinus).toHaveBeenCalledTimes(1);
});

test("object.minus 함수가 1번 호출되었다.(spy 삽입)", () => {
  jest.spyOn(obj, "minus");
  const result = obj.minus(1, 2);
  expect(obj.minus).toHaveBeenCalledTimes(1);
  expect(result).toBe(-1);
});
