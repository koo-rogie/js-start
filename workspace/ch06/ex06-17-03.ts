// echo 함수 - 제네릭 타입 제약
// ex06-17-02.ts 복사

(() => {
  function echo<T extends string | number>(msg: T): T {
    return msg;
  }

  console.log(echo<string>("hello"));
  console.log(echo<number>(100));
  // console.log(echo<boolean>(true));

  const str = echo<string>("hello");
  const num = echo<number>(123.456);

  console.log(str.toUpperCase());
  console.log(num.toFixed(2));

  function echo2<T extends { length: number }>(msg: T): T {
    return msg;
  }

  const str2 = echo2<string>("hello");
  const num2 = echo2<number[]>([123, 123]);
  console.log(str2.length);
  console.log(num2.length);
})();
