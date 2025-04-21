var todolist = [
  {
    "_id": 1,
    "title": "Javascript 공부",
    "done": true
  },
  {
    "_id": 2,
    "title": "Typescript 공부",
    "done": false
  },
  {
    "_id": 3,
    "title": "React 공부",
    "done": false
  },
  {
    "_id": 4,
    "title": "React 프로젝트",
    "done": true
  }
]

// 완료된 할일 목록
var doneList = [];
console.log('완료된 할일 목록', doneList);

// 남은 할일 목록
var reaminList = [];
console.log('남은 할일 목록', reaminList);

// 남은 할일 수
var reaminCount = 0;
console.log('남은 할일 수', reaminCount);

// _id=2인 할일
var todo = {};
console.log('_id=2인 할일', todo);

// _id=3인 할일의 index
var todoIndex = 0;
console.log('_id=3인 할일의 index', todoIndex);

// 남은 할일이 하나라도 있는가?
var hasTodo = false;
console.log('남은 할일이 하나라도 있는가?', hasTodo);

// 할일이 모두 완료 되었는가?
var busy = true;
console.log('할일이 모두 완료 되었는가?', busy);
