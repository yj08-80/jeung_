/*
[ 웹스토리지 ]
    - 웹브라우저(개발자도구F12) -> [application]탭 -> 왼쪽사이드 메뉴( local / session )
    - 도메인마다 웹스토리지가 할당된다
    1.종류
        (1)sessionStorage : 브라우저가 실행 동안만 저장, 브라우저를 닫으면 (자동)데이터가 사라진다.
            - 일회성 정보 , 이전 페이지 기록
        (2)localStorage : 사용자가 직접 삭제하거나 브라우저(캐시) 청소하지 않는 한 데이터 영구 저장한다.
            - 설정 정보 , 팝업창(다시 보지 않기)등 , 테마 설정 등, 자동로그인 등
    
    2.사용법
        1.sessonStorage 객체
        2.localStorage 객체
            (1) sessionStorage.setItem( "속성명/key" , 값/value );
            -> 속성명/key는 무조건 문자만 가능
            (2) sessionStorage.getItem( "속성명/key" );
            (3) sessionStorage.removeItem( "속성명/key" );
            (4) sessiongStorage.clear();
            *속성명/key는 무조건 문자만 가능
            *value는 객체와배열 타입 저장 불가능. 리터럴 자료만 가능

    [ JSON ] : 자바스트립트 객체 문법의 형식, JavaScript Object Notaion
        * 자바 객체를 문자열 타입이지만 객체 형식/ 모양으로 표현한 것
        - 3 : 숫자타입, 숫자모양 vs "3" : 문자열타입, 숫자모양
        - { age : 40 } : 객체타입, 객체모양 vs "{ age : 40 }" : 문자열타입,  객체모양
        - 사용 이유? 인터넷 상의 데이터를 통신하는 http는 객체지향이 아니다 -> 문자열과 바이트 전송만 가능
        -> 한국(객체 -> "객체")----http----> 일본("객체" -> 객체)
        1. 사용법
            (1) JSON.stringfy( 자료 );  : 해당 자료를 문자열 타입으로 반환
            (2) JSON.parse( 자료 );   : 해당 자료를 JS 타입으로 반환
*/

//[1] 웹스토리지를 제어하는 객체
console.log( sessionStorage );
//현재 웹스토리지에 저장된 자료 갖는 객체 반환
// IsThisFirstTime_Log_From_LiveServer: "true" 라이브서버가 사용함
console.log( localStorage );
//현재 웹스토리지에 저장된 자료 갖는 객체 반환

//[2] 웹스토리지에 자료 대입
sessionStorage.setItem( "name" , "유재석" );
localStorage.setItem( "age" , 40 );

//[3] 웹스토리지에 자료 호출
console.log( sessionStorage.getItem( "name" ) ); //유재석
console.log( localStorage.getItem( "age" ) ); //40
console.log( localStorage.getItem( "phone" ) ); //null 없는 속성명

//[4] 웹스토리지에 자료 삭제
sessionStorage.removeItem( "name" ); //name속성 삭제
console.log( sessionStorage ); //유재석 없어짐
localStorage.clear(); //전체 삭제
console.log( localStorage ); //40 없어짐

//[5] 웹스토리지에 JSON 객체 저장
sessionStorage.setItem( "m1" , JSON.stringify( [ "유재석" , 40 ] ) );
localStorage.setItem( "m2" , JSON.stringify( { name : "유재석" , age : 40 } ) );

//[6] 웹스토리지에 JSON 객체 호출
console.log( JSON.parse( sessionStorage.getItem( "m1" ) ) ); //배열타입
// vs
let data = localStorage.getItem( "m2" ); //객체타입
let jsonData = JSON.parse( data );
console.log( jsonData );