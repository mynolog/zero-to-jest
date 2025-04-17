import "jest-extended";

declare global {
  namespace jest {
    interface Matchers<R> extends jestExtended.Matchers<R> {}
  }
}
