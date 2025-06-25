/*
[ interval ] : 간격
    1. 정의 : 시간적인 간격에 땨라 특정 함수 실행
    2. 사용법
        (1)setInterval( 함수명 , 간격(밀리초) );
            -함수명 : 함수명만 작성한다 ( 소괄호 x )
            -밀리초 : 1/1000 , 1000 : 1초 , 10000 : 10초
                -> 반환값(함수 실행후 돌려주는/반환/결과)
                let 변수 = interval();
        (2)clearInterval( 중지할interval객체 );
            -중지할 interval 객체를 대입하여 중지하는 함수
            
*/
//[1]예제1
let value = 0; //전역변수
function 증가함수(){
    value += 1 ;//전역변수 1 증가
    //특정한 위치에 전역변수 값 대입
    //어디에
    const box1 = document.querySelector( "#box1" );
    //무엇을,value값을
    let html = value;
    //대입
    box1.innerHTML = html;
}//func end
//--------1초 간격에 따른 증가함수 재실행--------//
setInterval( 증가함수 , 1000 ); // 1000밀리초(1초)간격으로 증가함수 실행

//[2]예제2
function 시계함수(){ //현재 시간 출력
    //현재 시간을 구하기 : new Date() 객체
    let today = new Date();
    let hour = today.getHours(); //'시'만 반환하는 객체
    let minute = today.getMinutes(); //'분'만 반환하는 객체
    let second = today.getSeconds(); //'초'만 반환하는 객체

    const box2 = document.querySelector("#box2"); //(1)
    let html = `${ hour } : ${ minute } : ${ second }`; //(2)
    box2.innerHTML = html; //(3)
}//func end

setInterval( 시계함수 , 1000 );

//[3]예제3
let time = 0; //현재 타이머의 초
let timerId; //변수만 선언 , 추후에 interval객체를 저장
//(1)
function 시간증가(){
    time++ // 1증가
    document.querySelector("#box3").innerHTML = time; //출력
}
//(2)
function 타이머시작(){
    //전역변수에 interval 객체 저장
    //전역변수 사용이유 : 서로 다른 함수에서 공통 변수 사용 가능
    //지역변수 : 함수 안에서만 사용
    timerId = setInterval( 시간증가 , 1000 ); //1초마다 시간증가 함수
}

//(3)
function 타이머중지(){
    clearInterval ( timerId );
} //func end