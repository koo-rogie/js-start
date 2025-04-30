(() => {
  /*
대입 연산자 =, +=, -=, *=, /=, %=, **=
*/

  var age: number = 20;
  var year: number = 3 + 2;

  console.log(age);
  console.log(year);

  age = age + year; // 20 + 5 = 25
  console.log(age, year);

  age = age + year; // 25 + 5 = 30
  console.log(age, year);

  age = age + year; // 30 + 5 = 35
  console.log(age, year);

  age = age + year; // 35 + 5 = 40
  console.log(age, year);

  age = age + year; // 40 + 5 = 45
  console.log(age, year);

  age += year; // age = age + year == 50 + 5 = 55
  console.log(age, year);
})();
