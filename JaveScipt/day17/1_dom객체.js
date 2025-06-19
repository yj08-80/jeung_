/*객체란? 속성(property)와 함수(function)을 하나로 묶은 자료
    - 변수명.속성명 : 객체 내 속성값
    - 변수명.속성명() : 객체 내 함수
        (예) console(객체).log(함수) : console 객체 내 log 함수 호출
            document.write        : document 객체 내 wirte 함수 호출
[ DOM객체 ]
    - 내장(미리 만들어진) 객체
    1. 정의 : 문서객체모델 , HTML을 객체로 다루기 위한 내장객체
        D(document:html)O(Object)M(Model)
    2. 내장객체 : document
    3. 내장객체 내 주요 속성
        (1) document.write( "출력할내용" ) : HTML에 출력하는 함수
        (2) document.querySelector( "선택자" ) : HTML에 지정한 선택자를 JS객체로 *반환*하는 함수
            *선택자 : 1.마크업명 2.클래스명 3.아이디명 
        (3) document.querySelectorAll("div")  : HTML에 지정한 선택자를 모두 JS객체(배열)로 *반환*하는 함수
        (4) dom객체.innerHTML : 마크업내 html 호출하는 속성
            <마크업> !!여기가 innerHTML!! </마크업>
            -inner 없음 : input, img
        (5) dom객체.value
            <마크업 value = "!!!여기!!!"/>
            -value 속성 있음 : input, select, textarea 등등
            -value 속성 없음 : div, span, table 등등
        (6) dom객체.style : 마크업 내 style(CSS)요소 대입
        (7) dom객체.style.CSS속성명 : 마크업 내 style 요소 추가
        (8) dom객체.classList  : 마크업 내 적용된 class들 반환
            dom객체.classList.add("클래스명") : 마크업 내 클래스 추가
        (9) dom객체.classList.remove("클래스명") : 마크업 내 클래스 삭제
            dom객체.classList.toggle("클래스명") : 마크업 내 지정클래스가 없으면 추가 있으면 삭제
            dom객체.classList.contains("클래스명") : 마크업 내 지정클래스가 있는지 확인, true/false 반환
        
*/

//[1]
console.log(document); //HTML 마크업 전체
//[2]
document.write("내장객체 함수 실행");
//[3]
const div =  document.querySelector('div');
console.log( div );
const box2 = document.querySelector(".box2");
console.log(box2);
const box3 = document.querySelector("#box3");
console.log( box3 );
//[4]
const divArray = document.querySelectorAll("div");  // 여러개
console.log( divArray );
//[5]
const div2 = document.querySelector("div");
const html = div2. innerHTML;
console.log( html );
//[6]
//함수 실행 조건 : 함수1실행 버튼을 클릭했을 때
//매개변수 : x 반환값 : x 
//로직 : 콘솔을 출력
function func1(){ //함수 선언
    //[1] 함수실행 테스트 출력
    console.log("---func1 실행---");
    //[2] input 마크업을 JS객체로 가져오기
    const myInput = document.querySelector(".myInput")
    console.log( myInput );
    //[3] 가져온 JS dom객체 내 value 속성값 가져오기
    const test = myInput.value;
    console.log( test );
}
function func2(){
    console.log("---func2 실행---");
    document.querySelector(".title").innerHTML = "js에서 작성한 것";

}
// document.querySelector(".title").innerHTML = "js에서 작성한 것";
// = const title = document.querySelector(".title");
//   title.innerHTML = "js에서 작성한 것"

function func3(){
    console.log("---func3 실행---");
    //1.특정한 선택자의 마크업을 가져오기
    const title2 = document.querySelector(".title2");
    //2.해당 마크업 객체내 .style속성
    title2.style = " color:red; font-size:8px; "; //css문법 문자열로 대입
    const body = document.querySelector('body');
    body.style.backgroundColor = "black";

    title2.classList.toggle(".myStyle");
}