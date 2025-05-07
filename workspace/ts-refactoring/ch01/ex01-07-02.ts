(() => {
  /*
Symbol

*/

  // string
  var s1: string = "hello";
  var s2: string = "world";
  var s3: string = "hello";

  console.log(s1 === s2); // false
  console.log(s2 === s3); // false
  console.log(s1 === s3); // true

  var sym1 = Symbol("hello");
  var sym2 = Symbol("world");
  var sym3 = Symbol("hello");

  console.log(sym1 === sym2); // false
  console.log(sym2 === sym3); // false
  console.log(sym1 === sym3); // false
})();
