//1.자동 형 변환
    // (1)문자열 숫자에 곱하기 1을 하면 문자열 숫자가 숫자형 숫자로 변환한다.
let input = prompt("숫자를 입력하세요.") // prompt 함수는 항상 문자열 반환한다.
    //let input = "5"
console.log( typeof input ) //string
let result = input * 10 //"5" * 10
console.log( typeof result )
    // (2) 문자열형 + 숫자형 일 경우 자동으로 문자열로 변환된다. +(연결연산자)
let one = "20" //string
let two = 10 // number
console.log( one + two ) // "20"+10=2010
    
let time = prompt('사용(분) 시간 입력하세요.')
console.log( time * 1000 ) //8000
console.log( time + 1000 ) //81000

//2.자료형 변환 함수
    //Number("문자열") : 숫자형 타입으로 변환하는 함수
console.log( Number("10"));
    //parseInt() : 정수 숫자 변환 함수, 문자열로 써도 정수만 빼옴
console.log( parseInt("123.45")); // 123
console.log( parseInt("123ABC")); //123 

    //parseFloat() : 실수 순환 변환 함수
console.log( parseFloat("123.45")) //123.45

    //String() : 문자열 변환 함수
console.log( String(123)) // "123"

//생각해보기 : 국어 점수와 수학 점수를 prompt로 입력받아 더한 결과를 console.log에 출력하세요.
let 국어점수 = Number(prompt("국어 점수를 입력하세요")); //"100"
let 수학점수 = Number(prompt("수학 점수를 입력하세요")); //"80"
let 합계점수 = 국어점수 + 수학점수
console.log(`총합계 : ${합계점수}` );

//생각해보기2 : 이름과 나이를 prompt 로 입력받아 document.write 이용하여 <h3> 마크업으로 출력하세요
let name = prompt("이름을 입력하세요");
let age = Number(prompt("나이를 입력하세요"));
document.write(`<h3>${name}(${age})</h3>`)
