// 예제 1: localStorage에 데이터 저장하고 불러오기
// localStorage에 <input> 으로 입력받은 사용자의 아이디를 저장하고, 페이지를 새로고침해도 그 값이 유지되는 것을 확인 하시오. 
function func1(){
    console.log( "func1 exe" );
    //1.input 마크업 객체 가져오기
    const userInput = document.querySelector( "#userInput" );
    console.log( userInput );
    //2.마크업객체내 value(입력받은값) 가져오기
    const user = userInput.value;
    console.log( user );
    //3.입력받은 값을 localStorage에 저장하기
    localStorage.setItem( "user", user );
    console.log( user );
} //func1 end



// 예제 2: localStorage에 객체 저장하기 (JSON.stringify)
// 아래 사용자의 환경 설정(객체)을 문자열로 변환하여 localStorage에 저장 하시오. 
// const userSettings = { theme: 'dark', notifications: true, language: 'ko' };
const userSettings = { theme: 'dark', notifications: true, language: 'ko' };
//1.객체를 문자열로 변환
let data = JSON.stringify( userSettings );
//2.변환한 문자열을 localStorage wjwkd
localStorage.setItem( "data" , data );
//3.확인
console.log( data );



// 예제 3: localStorage에서 객체 불러오기 (JSON.parse)
// localStorage에 문자열로 저장된 사용자 설정(userSettings) 을 다시 객체로 변환하여 사용 하시오. 
let getData = localStorage.getItem("data");
let jsonData = JSON.parse( getData );
console.log( jsonData );



// 예제 4: 데이터 삭제하기 (removeItem, clear)
// 스토리지에 저장된 특정 데이터(userSettings) 또는 전체 데이터를 삭제 하시오. 
localStorage.removeItem( "data" ); // 특정 속성 삭제
// localStorage.clear(); // 전체 속성 삭제


// 예제 5: 방문 횟수 카운터 만들기
// 페이지가 로드될 때마다 sessionStorage를 사용하여 방문 횟수를 1씩 증가시키시오. 
// 현재 방문 횟수를 id="visitCount"인 span 태그에 "이번 세션에서 O번째 방문입니다." 형식으로 출력하시오. 
// (페이지를 새로고침하면 숫자가 올라가고, 브라우저 탭을 닫았다 다시 열면 1로 초기화되어야 합니다.)

// 1. 기존의 웹스토리지 불러오기/확인
let visit = sessionStorage.getItem( "visit" );
console.log( visit ); //null
    //존재하지 않은 속성명은 'null', 존재하는 속셩명은 '값' 반환
    if( visit == null ){
        sessionStorage.setItem( "visit" , 1 ); 
        visit = 1;
    }else{
        visit = Number( visit ) + 1;
        // 3. 웹스토리지 속성값 수정
        sessionStorage.setItem( "visit" , visit );
    }

const visitCount = document.querySelector( "#visitCount" );
visitCount.innerHTML = visit;
// 2. 새로운 웹스토리지에 값 저장


