// 기본 타입

(() => {
  let str: string = "100";
  let eag: number = 12;
  let doun: boolean = true;
  // doun = false;

  let nullVal: null = null;
  let emtyVal: undefined = undefined;

  let todo: object = { title: "TypeScript 공부", doun: false };
  let todoList: Array<string> = ["JavaScript", "TypeScript"];
  let todoList2: string[] = ["React", "Naxt.js"];

  // tuple: 길이가 고정되고 각 요소의 타임이 정의된 타입
  let items: [string, number] = ["안녕", 1];

  // any 타입 상관없이 대입이 됨
  let userName: any = "이일구";
  userName = "213";
  console.log(userName.toUpperCase());

  // unknown: 값을 지정할때는 아무타입의 값이나 저장이 가능하지만 사용할때 추가적인 타입 체크 코드를 요구
  let userName2: unknown = "Tsping";
  userName2 = 3432;
  if (typeof userName2 === "string") {
    // 타입가드
    console.log(userName2.toUpperCase());
  }
})();
