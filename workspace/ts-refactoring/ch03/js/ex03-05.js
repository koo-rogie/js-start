"use strict";
(() => {
    /*
     * 프로토타입 체인을 이용한 상속 기능 구현
     */
    /**
     * 고등학교 성적관리 생성자 함수
     * - 총점과 평균 계산 기능 포함
     * @param {number} kor 국어 점수
     * @param {number} eng 영어 점수
     */
    function HighSchool(kor, eng) {
        // 인스턴스의 속성 초기화
        this.kor = kor;
        this.eng = eng;
    }
    // 총점 계산 메서드 (프로토타입에 정의)
    HighSchool.prototype.sum = function () {
        return this.kor + this.eng;
    };
    // 평균 계산 메서드 (소수 첫째 자리에서 반올림)
    HighSchool.prototype.avg = function () {
        return Math.round(this.sum() / 2);
    };
    // HighSchool 인스턴스 생성 및 메서드 실행 확인
    const s1 = new HighSchool(100, 91);
    console.log("고등학교 총점", s1.sum()); // 191
    console.log("고등학교 평균", s1.avg()); // 96
    /**
     * 대학교 성적관리 생성자 함수
     * - 고등학교 기능 + 학점 계산 기능 포함
     * @param {number} kor 국어 점수
     * @param {number} eng 영어 점수
     */
    function College(kor, eng) {
        // 생성자 내부에서 속성 초기화
        // this.kor = kor;
        // this.eng = eng;
        HighSchool.call(this, kor, eng);
        // HighSchool 생성자 함수를 호출해서 this.kor, this.eng 초기화
        // => 부모 생성자의 속성 초기화 로직을 그대로 재사용
    }
    // 상속 함수 정의
    // 부모 생성자 함수(Parent)의 prototype을 자식 생성자 함수(Child)에 연결
    // function inherite(Parent, Child) {
    // const F = new Function(); // 중간 연결자 역할을 하는 빈 함수 생성
    // F.prototype = Parent.prototype; // 빈 함수의 프로토타입을 부모의 프로토타입으로 설정
    // Child.prototype = new F(); // 빈 함수의 인스턴스를 자식의 프로토타입으로 설정 (간접 상속)
    // Child.prototype = Object.create(Parent.prototype);
    //create함수는 지정한 prototype 객체를 참조하는 인스턴스 생성
    // Child.prototype.constructor = Child; // 자식 생성자의 constructor 프로퍼티 복원
    // }
    // College가 HighSchool을 상속받도록 설정 => 내가 만든 라이브러리에서 불러옴 mylib 파일 참조
    mylib.inherite(HighSchool, College);
    /**
     * 학점 계산 메서드
     * - 평균 점수를 기준으로 A ~ F 학점 반환
     */
    College.prototype.grade = function () {
        const avg = this.avg(); // HighSchool에서 상속받은 avg() 사용
        if (avg >= 90) {
            return "A";
        }
        else if (avg >= 80) {
            return "B";
        }
        else if (avg >= 70) {
            return "C";
        }
        else if (avg >= 60) {
            return "D";
        }
        else {
            return "F";
        }
    };
    // College 인스턴스 생성 및 모든 메서드 실행 확인
    const c1 = new College(80, 91);
    console.log("대학교 총점", c1.sum()); // 171
    console.log("대학교 평균", c1.avg()); // 86
    console.log("대학교 학점", c1.grade()); // B
    // College의 프로토타입 구조 출력 (상속된 메서드 포함 확인 가능)
    console.log(College.prototype);
})();
