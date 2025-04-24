/**
 * 이 문서는 lodash의 라이브러리를 사용하였기 때문에 index.html에서 봐야 나옴
 * @param {number} x
 * @param {number} y
 * @returns
 */
const sum = function (x, y) {
  return x + y;
};
console.log(sum(10, 20));

const currySum = _.curry(sum);
console.log(currySum(30)(40));

//lodash의 partial 함수를 사용해서 부분 적용 함수 생성
const sum100 = _.partial(sum, 100);
console.log(sum100(10));
console.log(sum100(20));
