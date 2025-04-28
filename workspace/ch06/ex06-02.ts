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
  userName = 213;

  let userName2: unknown = "Tsping";
  userName2 = 3432;

  console.log(userName.toUpperCase());
  // console.log(userName2.toUpperCase());
})();
