"use strict";
(() => {
    /*
     * 클래스 정의와 상속
     * ex03-05.js 복사
     */
    /**
     * 고등학교 성적관리 생성자 함수
     * - 총점과 평균 계산 기능 포함
     * @param {number} kor 국어 점수
     * @param {number} eng 영어 점수
     */
    class HighSchool {
        // HighSchool 클래스 정의 시작
        constructor(kor, eng) {
            // 생성자 메서드 정의
            this.kor = kor; // 국어 점수를 속성에 저장
            this.eng = eng; // 영어 점수를 속성에 저장
        }
        sum() {
            // 총점 계산 메서드 정의
            return this.kor + this.eng; // 국어 + 영어 점수 반환
        }
        avg() {
            // 평균 계산 메서드 정의
            return Math.round(this.sum() / 2); // 총점 / 2 후 반올림하여 반환
        }
    }
    // 고등학교 인스턴스 생성 및 결과 확인
    const s1 = new HighSchool(100, 91); // HighSchool 객체 생성 (국어: 100, 영어: 91)
    console.log("고등학교 총점", s1.sum()); // 총점 출력 → 191
    console.log("고등학교 평균", s1.avg()); // 평균 출력 → 96
    /**
     * 대학교 성적관리 생성자 함수
     * - 고등학교 기능 + 학점 계산 기능 포함
     * @param {number} kor 국어 점수
     * @param {number} eng 영어 점수
     */
    class College extends HighSchool {
        constructor(kor, eng) {
            // 자식 클래스의 생성자에서 반드시 super()를 먼저 호출해야 함
            // → 자바스크립트 클래스에서 부모 생성자의 초기화 작업을 수행하기 위해 필수
            // super(kor, eng)는 부모 클래스인 HighSchool의 생성자를 호출
            // → this.kor, this.eng 속성을 부모 생성자에서 설정함
            // 만약 여기에만 속성을 추가하고 싶다면 super() 아래에 추가 가능
            // 예: this.major = "컴퓨터공학";
            // constructor 자체도 생략 가능함
            // → 생성자에서 하는 일이 단순히 super(...) 호출뿐이라면 컴파일러가 자동으로 생성해줌
            super(kor, eng);
        }
        /**
         * 학점 계산 메서드
         * - 평균 점수를 기준으로 A ~ F 학점 반환
         */
        grade() {
            // grade 메서드 정의
            const avg = this.avg(); // 평균 점수 가져오기
            if (avg >= 90) {
                // 90 이상이면 A
                return "A";
            }
            else if (avg >= 80) {
                // 80 이상이면 B
                return "B";
            }
            else if (avg >= 70) {
                // 70 이상이면 C
                return "C";
            }
            else if (avg >= 60) {
                // 60 이상이면 D
                return "D";
            }
            else {
                // 그 외는 F
                return "F";
            }
        }
    }
    // 대학교 인스턴스 생성 및 메서드 확인
    const c1 = new College(80, 91); // College 객체 생성 (국어: 80, 영어: 91)
    console.log("대학교 총점", c1.sum()); // 총점 출력 → 171
    console.log("대학교 평균", c1.avg()); // 평균 출력 → 86
    console.log("대학교 학점", c1.grade()); // 학점 출력 → B
    // 프로토타입 구조 확인
    console.log(College.prototype); // College.prototype 출력 (상속된 메서드 확인 가능)
})();
