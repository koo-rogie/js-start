// 타입 가드 - typeof 연산자, instanceof 연산자

(()=>{
  console.log(typeof 10);
  console.log(typeof 'hello');
  console.log(typeof true);
  console.log(typeof new Function());
  console.log(typeof function(){});
  console.log(typeof undefined);
  console.log(typeof BigInt(Number.MAX_VALUE+100));
  console.log(typeof Symbol('hello'));
  console.log(typeof null);
  console.log(typeof {});
  console.log(typeof new Date());
  console.log(typeof new RegExp(''));
  console.log(typeof new Array());
  console.log(typeof []);

  // // msg의 타입에 따라서 다른 코드를 실행하는 함수
  // function print(msg: string | number | string[] | Date){
  //   // FIXME string 타입이거나 배열일 경우 msg의 길이를 출력하세요.
  //   console.log(msg.length);

  //   // FIXME number 타입일 경우 소수점 2자리까지 출력하세요.
  //   console.log(msg.toFixed(2));
  // }

  // print(['hello', 'world']);
  // print('hello');
  // print(123.456);
})();