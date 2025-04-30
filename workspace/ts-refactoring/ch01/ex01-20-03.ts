(() => {
/*
첫날에 쌀을 한톨 받습니다.
둘째날 쌀을 두톨 받습니다.
세째날 쌀을 네톨 받습니다.
매일 전날의 두배가 되는 쌀알을 받아서 모으면 몇일을 모아야 쌀알을 천만개 모을수 있을까?
*/

let day = 1; //날짜
let count = 1; // 받을 쌀알 수
let sum = 0; // 누적된 쌀알 수

// while (count <= 100) {
//   day++;
//   console.log(day);
//   count = day * 2;
//   console.log(count);
//   sum = day + count;
//   console.log(sum);
// }

while (sum < 1000_0000) {
  // 날짜가 n이 되는 날까지 , 언더바는 숫자 구분용 표시
  sum += count;
  count *= 2;
  day++;
}
console.log(
  `${day}일 동안 받았더니 ${sum}개 됐다. 내일은 ${count}개 받을 수 있겠군.`
);

// 30일 동안 몇개의 쌀알을 모을 수 있는가

day = 1;
count = 1;
sum = 0;

while (day <= 30) {
  // 30일 까지 반복
  sum += count; // 받은 쌀알을 합산함
  count = count * 2; // 쌀알을 2배씩 늘려줌
  day++; // 날짜를 하루씩 더함
}
console.log(
  `${day}일 동안 받았더니 ${sum}개 됐다. 내일은 ${count}개 받을 수 있겠군.`
);

})();
