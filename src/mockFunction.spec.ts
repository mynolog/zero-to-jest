import { obj } from "./mockFunction";

describe("obj.minus 테스트", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("obj.minus spy를 삽입, 함수 호출도 mock", () => {
    jest.spyOn(obj, "minus").mockImplementation();
    const result = obj.minus(1, 2);
    expect(obj.minus).toHaveBeenCalledTimes(1);
    expect(result).toBe(undefined); // result = undefined
  });

  test("obj.minus spy를 삽입, 함수를 mock로 대체", () => {
    jest;
    jest.spyOn(obj, "minus").mockImplementation(() => 5);
    const result = obj.minus(1, 2);
    expect(obj.minus).toHaveBeenCalledTimes(1);
    expect(result).toBe(5);
  });

  test("obj.minus에 spy를 삽입, 함수를 연속으로 mock로 대체", () => {
    jest
      .spyOn(obj, "minus")
      .mockImplementationOnce((a, b) => a + b)
      .mockImplementationOnce(() => 5);

    const result1 = obj.minus(1, 2);
    const result2 = obj.minus(1, 2);
    const result3 = obj.minus(1, 2);

    expect(obj.minus).toHaveBeenCalledTimes(3);
    expect(result1).toBe(3);
    expect(result2).toBe(5);
    expect(result3).toBe(-1);
  });

  test("obj.minus에 spy를 삽입, return 값을 대체", () => {
    jest
      .spyOn(obj, "minus")
      .mockReturnValueOnce(3)
      .mockReturnValueOnce(5)
      .mockReturnValue(7);

    const result1 = obj.minus(1, 2);
    const result2 = obj.minus(1, 2);
    const result3 = obj.minus(1, 2);

    expect(obj.minus).toHaveBeenCalledTimes(3);
    expect(result1).toBe(3);
    expect(result2).toBe(5);
    expect(result3).toBe(7);
  });
});
