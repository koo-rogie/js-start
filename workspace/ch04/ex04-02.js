// count 속성과 ride(), getCount() 메서드 작성
const Counter = function () {
  this.count = 0;
  this.getCount = function () {
    return this.count;
  };
  this.ride = function () {
    if (this.count < 40) {
      this.count++;
    } else {
      console.log("정원이 초과되었습니다.!");
    }
  };
};

const c = new Counter();
c.ride();
c.ride();

c.count += 40;

console.log("전체 탑승자", c.getCount()); // =
