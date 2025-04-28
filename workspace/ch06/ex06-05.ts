// 유니언 타입(union type)

(() => {
  function logString(msg: string) {
    console.log(msg);
  }
  function logNumber(msg: number) {
    console.log(msg);
  }
  logString("hello");
  logNumber(235);

  function log(msg: number | string) {
    console.log(msg);
  }
  log(123);
  log("123");
})();
