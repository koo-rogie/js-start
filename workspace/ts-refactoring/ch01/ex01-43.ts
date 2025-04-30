(() => {
/*
나머지 매개변수(Rest parameters)
*/

function fn(...args) {
  console.log(args);
  for (let arg of args) {
    console.log(arg);
  }
}

fn();
fn(10);
fn(20, 30);
fn(40, 50, 60);
fn(100, 120, 130, 90, 85, 111, 50, 70, 160, 200); // 총합: 1116

})();
