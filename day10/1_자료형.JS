//자료형
//[숫자형] : 정수와 실수로 나누어 구분
//      1.정수 : 소수점 없는 숫자
console.log( 100 )
console.log( typeof 100 ) //typeof 자료 : 자료의 자료형(종류) 반환
//      2.실수 : 소수점 있는 숫자 , 실수는 정밀하게 계산이 불가능하다. -> 별도의 정밀한 함수가 필요
//          컴퓨터는 0과 1밖에 모르기 때문에 ㄱ
console.log( 0.1+0.2 )
//[문자열] : ''또는 "" 묶음 자료
console.log( typeof "100") //숫자도 큰따옴표로 묶이면 문자열
console.log( typeof "안녕하세요")
//      1.이스케이프문자 : 기능이 포함된 특수문자
//              1)\백슬래시
console.log("\\안녕1") // \\ : 백슬래시 출력
console.log( "\'안녕2") // \' : 작은따옴표 출력
console.log("\"안녕3") // \" : 큰따옴표 출력
console.log("\n안녕4") // \n : 줄 바꿈 처리
console.log("\t안녕5") // \t : 탭(들여쓰기) 처리

//***2.템플릿 리터럴***
//      :`(백틱), 변수나 식을 넣을 때는 ${}
"안녕"+"자바" // "안녕자바" , 문자열이 포함된 +더하기는 연결 연산자로 사용된다.
console.log( "안녕" + "자바" );
console.log( `$("안녕")$("자바")` )

let name = 'Kim';
let classRoom = 204
console.log(name + "님," + classRoom + "호 강의실로 입장하세요"); 
//방법1,    변수명 +"문자열"+변수명+"문자열"
console.log(`${name}님, ${classRoom}호 강의실로 입장하세요`) 
//방법2, (1) 백틱으로 전체를 묶는다. (2)${}안에 변수나 식을 넣는다.
        //`${변수명}문자열${변수명}문자열`

//3.[논리형] : true나 false의 값을 표현하는 자료형
console.log(true)
console.log(false)

//4.[undefined]와 [null]
//  1.undefined : 자료형이 정의되지 않았을 때 데이터 상태
let 과일상자
console.log( 과일상자 ); //자료가 없는 변수를 호출하면 undefined
//  2.  null : 데이터의 값이 유효하지 않은 상태 , 자료가 없다/존재하지 않는다.
let 채소상자 = null; //변수에 null이 대입/저장된 상태, 라이브러리 함수들이 null 반환하는 경우가 많다.
console.log( 채소상자 ) //변수에 null일 경우에는 null

//[배열] : 하나의 변수에 값을 여러개 지장, ,(쉼표)로 구분하여 대괄호[]로 묶는다.
let season = [ "봄" , "여름" , "가을" , "겨울" ]
            //  0      1       2       3     길이.총 개수 = 4
    //배열 = 나열 : 열거하기 위해 하나씩 줄로 표현하는 것 - 열거: 여러가지를 낱낱이 늘어놓는 것
    //1.인덱스 : 순서대로 배정된 번호, 번호는 0번부터 시작
    //2.배열 호출하는 방법
        //(1) 배열 내 모든 요소(값,자료)들이 반환된다.
console.log( season )
        //(2) 배열 내 특정한 인덱스의 요소 반환
console.log( season[0] ) //봄
console.log( season[1] )
console.log( season[2] )
console.log( season[3] )
console.log( season[4] ) //undefined 존재하지 않음
        //생각해보기 : 변수갯수-1(season) 리터럴갯수-4(봄,여름,가을,겨울) 타입갯수-2(배열,문자열) 변수가 갖는 자료갯수-1(변수 입장에서는 하나-배열)
        // 변수 -> 배열 -> 문자열4개

//3.배열 수정
    //(1)배열 전체 수정, 변수명 = [새로운배열]
season = [ "유재석" , "강호동" ]
console.log(season) // ['유재석','강호동']
    //(2)배열 내 특정한 요소 수정 변수명[인덱스] = 새로운값
season[1] = "신동엽"
console.log( season ) // [ '유재석' , '신동엽']
//4.배열 내 요소 추가, 변수명.push(새로운값) ,가장 마지막에 추가됨
season.push( "서장훈" )
console.log( season )
//5.배열 내 요소 삭제,  변수명.splice(삭제할인덱스, 삭제할개수)
season.splice( 0, 1 ) //0번 인덱스부터 1개 삭제
console.log ( season )
//6.배열 내 특정 요소 찾기, 변수명.indexOf(찾을값), 찾을값이 배열 내 존재하면 인덱스, 없으면 -1 반환
console.log( season.indexOf("유재석") ) //-1
console.log( season.indexOf("신동엽") ) //0
let result = season.indexOf("서장훈")
console.log( result ) //1