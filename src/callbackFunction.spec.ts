import { timer } from "./callbackFunction";

test("timer 함수가 잘 실행되는지 테스트", (done) => {
  timer((message: string) => {
    expect(message).toBe("success");
    done();
  });
});
