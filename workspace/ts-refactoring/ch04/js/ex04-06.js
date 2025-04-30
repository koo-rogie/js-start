"use strict";
(() => {
    // 지정한 수가 소수인지 판별하는 함수
    let isPrime = function (num) {
        // 기본값은 "맞음"으로 가정
        let prime = "맞음";
        // 2부터 num-1까지 반복하며 나누어 떨어지는 수가 있는지 확인
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                // 나누어 떨어지면 소수 아님
                prime = "아님";
                break;
            }
        }
        // 결과 반환
        return prime;
    }.memoize();
    // isprime 함수에 메오지제이션 기능 추가
    isPrime = isPrime.memoize();
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
    console.log("1000000007 -> ", isPrime(1000000007));
    console.log("1000000007 -> ", isPrime(1000000007));
    console.log("1000000007 -> ", isPrime(1000000007));
    // 실행 시간 측정 종료
    console.timeEnd("소요시간");
})();
