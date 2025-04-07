/*
Symbol

*/

// string
var s1 = "hello";
var s2 = "world";
var s3 = "hello";

console.log(s1 === s2); // false
console.log(s2 === s3); // false
console.log(s1 === s3); // true

var s1 = Symbol("hello");
var s2 = Symbol("world");
var s3 = Symbol("hello");

console.log(s1 === s2); // false
console.log(s2 === s3); // false
console.log(s1 === s3); // false
