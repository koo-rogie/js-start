// 유니언 타입에 타입 별칭 지정
// ex06-06.ts 복사

(() => {
  type Massge = string | number;
  // FIXME 타입 에러가 발생하지 않도록 함수의 타입을 지정하세요.
  function logMessage(msg: Massge) {
    console.log(msg);
  }

  function warnMessage(msg: Massge) {
    // 스타일 적용
    console.log(`%c${msg}`, "color: yellow; font-size: 20px;");
  }

  logMessage("hello");
  logMessage(100);
  warnMessage("bye");
  warnMessage(200);
})();
