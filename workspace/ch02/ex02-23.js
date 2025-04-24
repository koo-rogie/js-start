// Function.prototype에 memo 메서드 추가 (메모이제이션 기능)
Function.prototype.memo = function (key) {
  // 캐시 객체 초기화 (이미 존재하면 그대로 사용)
  this._cache = this._cache || {};

  // 캐시에 값이 있으면 바로 반환
  if (this._cache[key] !== undefined) {
    return this._cache[key];
  } else {
    // 값이 없으면 계산 후 캐시에 저장하고 반환
    return (this._cache[key] = this(key));
  }
};

// 지정한 수가 소수인지 판별하는 함수
const isPrime = function (num) {
  // 기본값은 "맞음"으로 가정
  let prime = "맞음";

  // 2부터 num-1까지 반복하며 나누어 떨어지는 수가 있는지 확인
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      // 나누어 떨어지면 소수 아님
      prime = "아님";
      break;
    }
  }

  // 결과 반환
  return prime;
};

// 실행 시간 측정 시작
console.time("소요시간");

// 일반 호출 (캐시 사용 X)
console.log("3 -> ", isPrime(3));
console.log("4 -> ", isPrime(4));
console.log("5 -> ", isPrime(5));
console.log("6 -> ", isPrime(6));
console.log("7 -> ", isPrime(7));
console.log("8 -> ", isPrime(8));
console.log("9 -> ", isPrime(9));

// memo 사용 (캐시 기능 O)
console.log("1000000007 -> ", isPrime.memo(1000000007));
console.log("1000000007 -> ", isPrime.memo(1000000007));
console.log("1000000007 -> ", isPrime.memo(1000000007));

// 실행 시간 측정 종료
console.timeEnd("소요시간");
