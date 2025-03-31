/*
비교 연산자 >, >=, <, <=, ==, !=, ===, !==
*/

var a = 5;
var b = 10;
var c = "5";
var d = 5;

//  > 크다
console.log(a > b); // 5 >10 ?

// < 작다
console.log(a < b); // 5 <10 O

// >=크거나 같다
console.log(a >= d); // 5 >=5 O

// <= 작거나 같다
console.log(a <= b); // 5 <= 10 O

//문자열 비교

console.log(a == c); // 동등, 5 == "5" = 5 ==5 => 숫자로 변환해줌
console.log(a === c); // 일치, 5 ==="5" = number ==string =false


console.log('ch05' > 'ch01') // 사전순으로 비교 오름차순으로써는 이 값이 맞음
console.log('ch12' > 'ch2') // 사전순으로 비교 false

// ch05, ch12, ch2, ch01 오름차순 정렬 순서
// ch는 동일 선상
// 0 1 2 0 으로 따졌을때  0이 먼저 나옴 그리고 1, 2
// 그리고 5, 2, , 1,
// 정렬 결과 → ch01, ch2, ch05, ch12
