(() => {
  const lionStudents: string[][] = [
    ["십이기핑", "몰라핑", "안가르쳤어핑", "임한길", "이호정", "김현지", "이도울", "박선영", "김하영"], // febc
    ["하츄핑", "키키핑", "주르핑", "아잉핑", "바로핑", "라라핑", "아자핑"],
    ["부투핑", "무셔핑", "차나핑", "안드핑", "로이핑", "애플핑", "스티브핑", "잡스핑"],
  ];

  // 전체 수강생 수를 저장할 변수
  let sum: number = 0;
  // '바로핑' 학생의 존재 여부를 체크할 변수
  let isInStudent: boolean = false;

  // 각 캠프를 순회하면서 처리
  for (let i: number = 0; i < lionStudents.length; i++) {
    // 현재 처리중인 캠프의 수강생 배열
    const campStudents: string[] = lionStudents[i];
    // 각 캠프의 수강생이 몇명인가?
    console.log("수강생", campStudents.length, "명");
    // 전체 수강생 수 누적
    sum += campStudents.length;

    // 바로핑이라는 수강생이 있는가?
    for (let k: number = 0; k < campStudents.length; k++) {
      // febc 모든 수강생 이름 출력
      if (i === 0) console.log(campStudents[k]);
      if (campStudents[k] === "바로핑") {
        isInStudent = true;
        break; // '바로핑'을 찾으면 더 이상 검색할 필요가 없으므로 반복문 종료
      }
    }
  }

  // '바로핑' 학생 존재 여부 출력
  if (isInStudent) {
    console.log("바로핑 있음.");
  } else {
    console.log("바로핑 없음.");
  }

  // 전체 수강생이 몇명인가?
  console.log("전체 수강생", sum);

  // febc에 박선영이 존재하는가
  let isInPark: boolean = false;
  for (let i: number = 0; i < lionStudents[0].length; i++) {
    if (lionStudents[0][i] == "박선영") {
      isInPark = true;
      break;
    }
  }
  isInPark = lionStudents[0].includes("박선영");
  if (isInPark) {
    console.log("있다");
  } else {
    console.log("없다");
  }
})();
