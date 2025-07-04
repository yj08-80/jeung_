/*
[변수]
    - 1.*하나*의 자료/데이터를 담아주는 (메모리)공간
    - 2.목적 : 재사용성, 가독성
    -3. 사용법 : 
        1.let 변수명
        (변수를 선언하는 방법1) : 초기값이 없다. *초기값이란? 변수가 선언할때 초기에 대입되는 값
        let 변수명
        (변수를 선언하는 방법2) : 초기값이 있다
        let 변수명 = 자료/값

    -4.형태
        1.let : 변수를 선언하기 위한 키워드/명령어
        2.변수명 : 메모리 공간의 상징적인 이름   카멜표기법 : mycar -> myCar
        3.* : 오른쪽 항을 왼쪽 항에 대입/할당/넣는다.
        4.자료 : 변수에 저장할 자료
        */

    //1.변수 선언 방법
let 이름1           //초기값이 없는 변수 선언
let 이름2 = "유재석" //초기값이 있는 변수 선언
    //2.변수를 호출하는 방법, 변수명, 주의할 점 : 문자열 처리하면 안됨
console.log(이름1)
console.log(이름2) //유재석, 이름2라는 ㅂ녀수가 가지는 변수값을 호출

    //3.변수의 값을 수정하는 방법, 변수명 = 새로운값
이름1 = "강호동"
이름2 = "유재석2"
console.log(이름1) //이름1라는 변수를 호출하여 새로운값 대입
console.log(이름2) //이름2라는 변수를 호출하여 새로운값 대입


let width; //'width' 이름으로 변수를 선언한다.
let height; //'height'이름으로 변수를 선언한다.

width = 200 //변수에 값을 할당한다, 값을 대입한다.
height = 50 //=(대입연산자) 기준으로 오른쪽에서 왼쪽으로 대입


let area = width + height //변수 선언과 동시에 계산 결과값도 대입
console.log(area) //넓이를 콘솔에 출력

/*
[상수]
1.정의 : 하나의 자료/데이터를 담아 두는 공간이면서 수정 불가능한 변수
2.목적 : 절대값, 협업
3.사용법
    const 변수명 = 초기값 *상수는 무조건 초기값이 필요하다.
4.형태
    1.const : 상수를 선언하기 위한 키워드
    2.변수명          카멜표기법 대신 전체대문자 사용
    3. =
    4.자료 : 상수(고정)으로 저장할 자료
*/

//상수 선언 방법
const 이름3 = "신동엽"

//상수를 호출하는 방법,변수명
console.log(이름3)

//3.상수의 값을 수정하는 방법, x 불가능하다
이름3 = "신동엽2"  //Uncaught TypeError: Assignment to constant variable.

let point1 = 50
//변수명:point1 리터럴:50
let point2 = 100
//변수명:point2 리터럴:100
let point3 = point1 + point2
let point4 = 40
//변수명:point3 리터럴:150
//위 코드에서 총 리터럴의 개수? 3개 (50은 두 개지만 같은 값이기 때문에)
// +연산 : 계산을 통해 하나의 결과를 도출하는 행위