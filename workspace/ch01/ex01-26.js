/*
배열 생성, 읽기, 쓰기
*/

const arr = new Array(1, 2, 3); // 빈 배열 생성 및 초기화
console.log("arr의 배열과 타입은?: ", typeof arr, arr); //  object [ 1, 2, 3 ]
console.log("arr의 길이는?: ", arr.length); // 0

// 지정한 배열를 마지막 요소로 추가한다
arr.push(10); // 배열에 값 추가
console.log("arr의 바뀐 길이는?: ", arr.length); // 0
console.log("arr의 바뀐 배열과 타입은?: ", typeof arr, arr); // object [ 1, 2, 3, 10 ]

arr[4] = 20; // 배열에 값 추가
arr[5] = 30; // 배열에 값 추가
arr[1] = 100; // 배열에 값을 수정
arr[9] = 200; // 배열에 값을 수정
console.log("arr의 index의 길이는?: ", arr.length); // 0
console.log("arr의 index의 배열과 타입은?: ", typeof arr, arr); // object [ 1, 2, 3, 10, 20, 30 ]
console.log("arr의 index 7번의 값은?: ", arr[7]); // undefined

// 배열의 마지막에 새로운 데이터 추가
arr[arr.length] = 500;
arr.push(400); //
console.log("arr의 배열의 마지막 값은?: ", arr[arr.length - 1]); // 200
