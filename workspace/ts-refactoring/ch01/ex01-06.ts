/*
기본 데이터 타입 - Number, String, Boolean, undefined, null
*/
(() => {
  // number
  var num: number = 100;
  var flotNum: number = 3.14;

  //string
  var s1: string = "single quote";
  var s2: string = "double quote";

  // boolean
  var b1: boolean = true;
  var b2: boolean = false;

  // any
  var emptyal: any;
  var nullyal = null;

  // null
  var nullyal = null;

  console.log(num, flotNum, s1, s2, b1, b2, emptyal, nullyal, nullyal);
  console.log(typeof num, typeof flotNum, typeof s1, typeof s2, typeof b1, typeof b2, typeof emptyal, typeof nullyal, typeof nullyal);
})();
