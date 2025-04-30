(() => {
/*
논리 연산자 &&, ||, !
*/

//논리 합(or) :
// 피연산자 둘 중 하나라도 true일 경우 true가 됨,
// 둘다 false일 경우 false가 됨
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

var id = "koo";
var invalidId = id.length < 4 || id.length > 12;

console.log(`이 id는 4글자 보다 크거나 12글자보다 작은가요?: ${invalidId}`);

// 앞의 값이 참이면 앞의 값을 반환
//  앞의 값이 거짓이면 뒤의 값을 반환
// falsy: 거짓값으로 생각함 => number 0, string ' '. boolean false, null, undefinde
// truthy: falsy인 값을 제외한 모든 값을 생각함
console.log("hello" || "world"); //hello
console.log(90 || 30); // 90
console.log(null || "world"); // false => world
console.log(undefined || "world"); // false => world
console.log(0 || 100); //false => 100
console.log("" || "hello"); // hello
console.log("" || "guset"); // guset

let userName = "유저 이름";
let userAge = 22;
// 이름
console.log(userName || "guest");
userName = "";
console.log(userName || "guest");

// 나이
console.log(userAge || "만나이");
userAge = "";
console.log(userAge || "나이미상");

console.log("----------------구분선----------------");

// 논리곱(AND):
// 피연산자 둘 다 true일 경우 true가 됨
// 둘 중 하나라도 false일 경우 false가 됨.
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

// 앞의 값이 참이면 뒤의 값을 변환
// 앞의 값이 거짓이면 앞의 값을 변환
id = "nulfdfddfdfdfdffdfdfdfdl"; // type은 object
var invalidId = !(id.length >= 4 && id.length <= 12);
console.log("글자수", id && id.length);
console.log("글자수", id?.length);
console.log("글자수", invalidId && invalidId.length);
console.log("글자수", invalidId?.length);

})();
