// 전역 오염 방지를 위해 고유 네임스페이스 객체 생성
const mylib = {};

// 모든 함수 객체에 memoize 메서드를 추가
// 원본 함수를 캐싱 가능한 형태로 감싸서 반환
Function.prototype.memoize = function () {
  const fn = this;
  return function () {
    // 캐싱 로직을 실행하는 memo 메서드를 호출
    return fn.memo.apply(fn, arguments);
  };
};

// 메모이제이션 로직 정의
// 키 기반으로 결과를 저장하고 재사용
Function.prototype.memo = function (key) {
  // 캐시 객체가 없으면 생성
  this._cache = this._cache || {};

  // 이미 캐시에 존재하면 저장된 결과를 반환
  if (this._cache[key] !== undefined) {
    return this._cache[key];
  } else {
    // 없으면 계산 후 캐시에 저장하고 반환
    return (this._cache[key] = this(key));
  }
};

// 상속 헬퍼 함수 정의
// 자식이 부모의 prototype을 상속받도록 설정
mylib.inherite = function (Parent, Child) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child; // constructor 복원
};
