const array1 = ["a", "b", "c"];

// for of
for (const element of array1) {
  console.log(element);
}
// 객체 생성
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
