export function timer(callback: (message: string) => void) {
  setTimeout(() => {
    callback("success");
  }, 500);
}
