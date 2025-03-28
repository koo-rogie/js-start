/*
제목: 삼각형과 세 변
설명: 변의 길이를 보고 삼각형을 판별하고 분류하는 문제
제출: https://www.acmicpc.net/submit/5073

문제
삼각형의 세 변의 길이가 주어질 때 변의 길이에 따라 다음과 같이 정의한다.

Equilateral :  세 변의 길이가 모두 같은 경우
Isosceles : 두 변의 길이만 같은 경우
Scalene : 세 변의 길이가 모두 다른 경우
단 주어진 세 변의 길이가 삼각형의 조건을 만족하지 못하는 경우에는 "Invalid" 를 출력한다. 
예를 들어 6, 3, 2가 이 경우에 해당한다. 
가장 긴 변의 길이보다 나머지 두 변의 길이의 합이 길지 않으면 삼각형의 조건을 만족하지 못한다.

세 변의 길이가 주어질 때 위 정의에 따른 결과를 출력하시오.

입력
각 줄에는 1,000을 넘지 않는 양의 정수 3개가 입력된다. 
마지막 줄은 0 0 0이며 이 줄은 계산하지 않는다.

출력
각 입력에 맞는 결과 (Equilateral, Isosceles, Scalene, Invalid) 를 출력하시오.

[AI가 추가한 테스트 케이스 10개]

예제 입력 1
7 7 7
6 5 4
3 2 5
6 2 6
0 0 0
예제 출력 1
Equilateral
Scalene
Invalid
Isosceles

예제 입력 2
5 5 5
5 4 3
5 5 3
0 0 0
예제 출력 2
Equilateral
Scalene
Isosceles

예제 입력 3
20 5 5
8 7 6
15 15 5
0 0 0
예제 출력 3
Invalid
Scalene
Isosceles

예제 입력 4
3 3 3
3 4 6
4 1 2
0 0 0
예제 출력 4
Equilateral
Scalene
Invalid

예제 입력 5
7 7 7
7 7 5
7 5 3
0 0 0
예제 출력 5
Equilateral
Isosceles
Scalene

예제 입력 6
6 6 6
6 6 1
6 1 1
0 0 0
예제 출력 6
Equilateral
Isosceles
Invalid

예제 입력 7
10 5 8
10 10 10
10 10 5
0 0 0
예제 출력 7
Scalene
Equilateral
Isosceles

예제 입력 8
999 999 999
999 998 997
999 999 500
0 0 0
예제 출력 8
Equilateral
Scalene
Isosceles

예제 입력 9
100 100 1
100 99 98
100 50 49
0 0 0
예제 출력 9
Isosceles
Scalene
Invalid

예제 입력 10
4 4 4
4 4 7
4 5 6
0 0 0
예제 출력 10
Equilateral
Isosceles
Scalene
*/

