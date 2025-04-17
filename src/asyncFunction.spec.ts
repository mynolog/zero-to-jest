import { okPromise, okAsync, noAsync, noPromise } from "./asyncFunction";

test("okPromise 테스트", () => {
  const mockOkPromise = jest.fn(okPromise);
  return expect(mockOkPromise()).resolves.toBe("ok");
});

test("okPromise 테스트 2", () => {
  const mockOkPromise = jest.fn(okPromise);
  return mockOkPromise().then((result) => {
    expect(result).toBe("ok");
  });
});

test("okPromise 테스트 3", async () => {
  const mockOkPromise = jest.fn(okPromise);
  const result = await mockOkPromise();
  expect(result).toBe("ok");
});

test("noPromise 테스트", () => {
  const mockNoPromise = jest.fn(noPromise);
  return expect(mockNoPromise()).rejects.toBe("no");
});

test("noPromise 테스트 2", () => {
  const mockNoPromise = jest.fn(noPromise);
  return mockNoPromise().catch((result) => {
    expect(result).toBe("no");
  });
});

test("noPromise 테스트 3", async () => {
  try {
    const mockNoPromise = jest.fn(noPromise);
    const result = await mockNoPromise();
  } catch (error) {
    expect(error).toBe("no");
  }
});
