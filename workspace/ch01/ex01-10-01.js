/*
증감 연산자 a++, a--, ++a, --a
*/

var count = 0; // 0으로 초기화
console.log(count);

count = count + 1; // 0 + 1 = 1
count += 1; // 1 + 1 = 2
count++; // 2 + 1 =3

console.log(count);

console.log(count++); // count= 3 / 3 + 1 = 4
console.log(++count); // count = 4 / 4 + 1 =5

var sum = count++ + 10;
console.log(sum);

sum = ++count + 10;
console.log(sum);
