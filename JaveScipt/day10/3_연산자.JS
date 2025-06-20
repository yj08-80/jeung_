
// //[연산자] : 연산할 때 사용되는 기호
// //1.산술연산자 : 하나의 연산결과를 {숫자}로 변환
// //+더하기 -빼기 *곱하기 /나누기 %나머지
// console.log( 10 + 3 ); //13
// console.log( 10 - 3 ); //7
// console.log( 10 * 3 ); //30
// console.log( 10 / 3 ); //3.333..
// console.log(parseInt( 10 / 3 )); // 몫3
// console.log( 10 % 3 ); // 나머지1

// //2.연결연산자 : 연산에 문자열이 포함되면 더하기가 아닌 연결이 된다.
// console.log( "점수:" + 10 ); //연결

// // [지문1] prompt 함수로 국어 , 영어 , 수학 점수를 각 입력받아서 각 변수에 저장하고 총점 과 평균을 계산하여 console탭에 출력하시오.
// let korScore = Number(prompt( "국어 점수를 입력하세요" )); // 또는 Number를 쓰지 않고 *1을 하면 숫자형으로 변환됨
// let engScore = Number(prompt( "영어 점수를 입력하세요" ));
// let mathScore = Number(prompt( "수학 점수를 입력하세요"));

// let sum = korScore + engScore + mathScore;
// let average = sum / 3
// console.log( `총점 : ${sum}` );
// console.log( `평균 : ${average}` );

// // [지문2] prompt 함수로 반지름를 입력받아서 원넓이[반지름*반지름*3.14] 계산하여 console탭에 출력하시오.
// let 반지름 = prompt( "반지름을 입력하세요" )*1 ;
// let 원넓이 = 반지름 * 반지름 * 3.14
// console.log( `원넓이 : ${원넓이}` );
// // [지문3] prompt 함수로 두 실수를 입력받아서 앞 실수의 값이 뒤실수의 값의 비율% 계산하여 console탭에 출력하시오.
// let 실수1 = parseFloat(prompt( "실수를 입력하세요" ));
// let 실수2 = parseFloat(prompt( "실수를 입력하세요2" ));
// let 실수비율 = ( 실수1/실수2 ) * 100
// console.log(`비율 : ${실수비율}` );

// //3.비교연산자 : 하나의 연산 결과를 (논리)값으로 변환
// //  >초과/크다
// //  <미만/작다
// //  >= 이상/크거나같다
// //  <= 이하/작거나 같다
// //  == (값)같다         === (값과 자료형이)같다. ex)"10"==10 true "10"===10 false
// //  != (값)같지 않다     !== (값과 자료형이)같지않다.
// //4.논리연산자 : 하나의 연산 결과를 (논리)값으로 반환, && / || 항상 2개 이상의 비교연산자 필요하다
// //  && : 이면서 면서 이고 그리고 모두 and 조건 / 다 맞아야 true
// //  || : 이거나 거나 하나라도 또는 or 조건 / 하나만 맞아도 true
// //  !  : 부정 반대 not 조건 
// // * 범위논리는 지원하지 않음 5 < 점수 < 10 xxxx  -> 점수 > 5 && 점수 < 10

// // [지문4] prompt 함수로 정수를 입력받아 입력받은 값이 홀수이면 true / 짝수이면 false 로 console탭에 출력하시오.
// let 정수 = Number(prompt( "정수를 입력하세요" ));
// let 결과 = 정수 % 2 == 1;

// console.log(`결과 : ${결과}`)
// // [지문5] prompt 함수로 정수를 입력받아 입력받은 값이 7의 배수이면 true / 아니면 false 로 console탭에 출력하시오.
// let 정수1 = prompt("정수를 입력하세요");
// let 결과1 = 정수1 % 7 == 0

// console.log(`결과 : ${결과1}`);
// // [지문6] prompt 함수로 아이디 와 비밀번호를 입력받아서 아이디가 'admin' 이고 비밀번호가 1234 와 일치하면 true / 아니면 false 출력하시오.
// let 아이디 = prompt("아이디를 입력하세요.");
// let 비밀번호 = Number(prompt("비밀번호를 입력하세요."));
// let 결과2 = ( 아이디 == "admin" ) && ( 비밀번호 = 1234 );

// console.log(`결과 : ${결과2}`);
// // [지문7] prompt 함수로 정수를 입력받아 입력받은 값이 홀수 이면서 7배수 이면 true / 아니면 false 로 console탭에 출력하시오.
// let 정수2 = Number(prompt("정수를 입력하세요2"));
// let 결과3 = ( 정수2 % 2 == 1 ) && ( 정수2 % 7 == 0)

// console.log(`결과 : ${결과3}` );

// 5.할당연산자/(복합)대입연산자
//      = : 오른쪽 데이터를 왼쪽에 대입/할당/넣기  =대입 ==같다
//      += : 오른쪽 데이터를 왼쪽에 더한 후에 대입/할당/넣기 let A = 2 , A = A + 3 vs A =+ 3
//      -= 
//      *=
//      /=
//      %=

// let 변수 = 10;
// 변수 += 3;
// console.log(`변수 : ${변수}`)
// 변수 -= 4; // 13-4=9
// console.log(`변수 : ${변수}`)
// 변수 *= 2;
// console.log(`변수 : ${변수}`)

// //6.증감연산자 : 증가감소 연산자
// // ++ : 1씩 증가
// // -- : 1씩 감소

// let 나이 = 40;
// console.log( `나이 : ${++나이}` );
// //(1)나이라는 변수를 호출 : 40
// //(2)호출된 값에 ++해서 1 증가 : 41
// //(3)console.log() : 41

// console.log( `나이 : ${나이++}` ); // 42가 아닌 41
// //(1)나이라는 변수를 호출 : 41
// //(2)console.log() : 41
// //(3)모든 명령이 끝난 뒤 ++해서 42 -> 세미콜론 기준으로 명령어에서 가장 나중에 처리 , 세미콜론 안에서 가장 나중에 처리한다는 뜻

// //7.**삼항연산자** : 연산할 항이 3개
// //      (1)조건 ? (2)참일때 : (3)거짓일때
// //      조건1? 참1 : 조건2 ? 조건2 : 조건3 ? 조건3
// let 점수 = 80; // 만약에 점수가 80점 이상이면 '합격' 아니면 '불합격'
// let 결과 = 점수 >= 80 ? "합격" : "불합격"

// console.log( 결과 );

// [지문8] 1차점수 와 2차점수 prompt함수로 각 입력받아서 총점이 150점이상이면 '합격' 아니면 '불합격' HTML의 <h3> 에 출력하시오.
let firstScore = Number(prompt("1차점수를 입력하세요"));
let secondScore = Number(prompt("2차점수를 입력하세요"));
let sum =  firstScore + secondScore;
let result3 = sum >= 150 ? "합격" : "불합격"
document.write(`<h3></h3>`)

console.log(`결과 : ${result3}`)
// [지문9] 두 사람의 이름을 prompt함수로 각 입력받아서 만일 이름이 '유재석' 이면 뒤에 (방장) 이라고 이름 뒤에 붙이고 아니면 생략한다.  HTMLx의 <ol> 에 결과를 출력하시오.
let name01 = prompt("이름을 입력하세요1");
let result01 = name01 = "유재석" ? `${name01}(방장)` : `${name01}`;
console.log(`결과 : ${result01}`);
