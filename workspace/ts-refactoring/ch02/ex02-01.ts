(() => {
  // ① ObjType 인터페이스 정의
  interface ObjType {
    bar(): string;
    baz(): string;
  }

  // ② 값 선언
  const num: number = 100;
  const str: string = "hello";
  const foo = function (this: any): string {
    console.log(this);
    return "I am foo";
  };

  // ③ obj에 바(bar), 바즈(baz) 메서드 할당
  const obj: ObjType = {
    bar: foo,
    baz() {
      return "i am baz";
    },
  };

  // ④ arr을 [number, string, ObjType, ()=>string] 튜플로 선언
  // TODO 이거 물어보기 "() => string" GPT가 이렇게 알려줌
  const arr: [number, string, ObjType, () => string] = [num, str, obj, foo];

  // 이제 모든 호출이 안전하게 컴파일됨
  console.log(foo(), arr[3](), obj.bar(), arr[2].bar(), obj.baz());
})();
