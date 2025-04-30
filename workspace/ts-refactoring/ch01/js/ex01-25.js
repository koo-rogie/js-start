"use strict";
(() => {
    /*
    객체의 속성 관리
    */
    const foo = {
        name: "푸푸핑",
        mainJob: "magician",
    };
    // 객체 프로퍼티 읽기
    console.log("객체 프로퍼티 읽기: ", foo.name, foo["mainJob"], foo.subJob); // 객체 프로퍼티 읽기:  푸푸핑 magician undefined
    //객체 프로퍼티 갱신
    foo.mainJob = "fairy";
    console.log("객체 프로퍼티 갱신: ", foo.name, foo["mainJob"], foo.subJob); // 객체 프로퍼티 갱신:  푸푸핑 fairy undefined
    // 객체 프로퍼티 동적 생성
    foo.subJob = "celeb";
    console.log("객체 프로퍼티 동적 생성: ", foo.name, foo["mainJob"], foo.subJob); // 객체 프로퍼티 동적 생성:  푸푸핑 fairy celeb
    // 객체 프로퍼티 삭제
    delete foo.mainJob;
    console.log("객체 프로퍼티 삭제: ", foo.name, foo["mainJob"], foo.subJob); // 객체 프로퍼티 삭제:  푸푸핑 undefined celeb
    // 객체의 모든 프로퍼티 읽기
    for (let prop in foo) {
        // 1. prop= name, 2. prop = subJob
        console.log("객체의 모든 프로퍼티 읽기: ", prop, foo[prop]); // 1. 푸푸핑, 2. celeb
    }
})();
