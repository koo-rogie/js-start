// import 구문은 보통 모듈의 최상단에 정의
// Named Import
// import { plus, minus } from './math.js';
import { plus as add, minus } from "./math.js";
// Default Import
import MyMath from "./math.js";
// Mixed Import(권장하지 않음)
import YourMath, { plus } from "./math.js";
plus(1, 2);
minus(2, 4);
MyMath.plus(3, 4);
MyMath.minus(4, 5);
MyMath.multiply(5, 6);
add(7, 8);
YourMath.multiply(9, 10);
const haru = {
    name: "하루",
    age: 5,
};
console.log(haru);
if (MyMath.minus(5, 6) < 0) {
    // Dynamic Import
    // ES2015
    import("./math.js").then((dynamicMath) => {
        dynamicMath.plus(7, 8);
    });
    // ES2017
    const dynamicMath2 = await import("./math.js");
    dynamicMath2.minus(8, 9);
}
