/*

[ for ]
    1.형태
        for( 초기값 ; 조건문 ; 증감식 ){
            실행문;
        }
    2.
        (1)초기값 : 반복할 때 반복의 카운트/횟수 체크하는 변수의 초기값
        (2)조건문 : 반복 실행문이 실행되는 조건으로 true 이면 {} 실행, 아니면 종료
        (3)증감식 : 반복 변수의 증가 혹은 감소 변화 연산식
        (4)실행문 : 조건이 true일때 반복실행되는 코드

    3.순서
        1.초기값 -> 2.조건문(true) -> 3.실행문 -> 4.증감식 -> 5.조건문(true) -> 실행문
    예) 유재석이 계단을 1칸부터 10칸까지 1칸씩 오른다.
    for(let 유재석 = 1; 유재석 <= 10 ; 유재석++ ){
        오른다;
    }
    4.배열과 반복문 관계 :
        (1) 배열의 인덱스는 순차적인 순서 번호가 존재한다.
            인덱스란 ? 자료가 저장된 순서번호 0번 시작
        (2) 배열의 길이(자료개수, 1시작) : 변수명.legnth
        (3) 배열의 마지막 인덱스(0시작) : 변수명.length-1
            회원이 총 3명이면, 인덱스는 0 1 2, 마지막 인덱스 : 2
*/

//[1]배열의 데이터를 하나씩 조회하세요
let 과일상자 = [ "사과" , "포도" , "딸기" ];
//반복문없이
console.log( 과일상자[0] );
console.log( 과일상자[1] );
console.log( 과일상자[2] );
//반복문사용
for(let i = 0 ; i <=2 ; i++){
    console.log( 과일상자[ i ] );
}
//반복문사용2 마지막까지/인덱스 
for(let index = 0 ; index <= 과일상자.length-1 ; index++){
    console.log( 과일상자[ index ] );
}
//[2]3개의 입력받은 데이터들을 하나의 배열에 추가/저장하시오.
let dataList = [];
for( let count = 1 ; count <= 3 ; count++ ){
    let data1 = prompt("데이터를 입력하세요");
    dataList.push( data1 );
}
console.log(dataList);


//[생각해보기1] : dataList의 모든 자료들을 <ul> 마크업의 요소 <li> 마크업에 하나씩 출력하시오.
let html = `<ul>
                <li>${dataList[0]}</li>
                <li>${dataList[1]}</li>
                <li>${dataList[2]}</li>
            </ul>`
document.write(html);
//반복문으로
let html2 = `<ul>`
for( let index = 0 ; index <= 2 ; index++ ){
    html2 +=`<li>${ dataList [ index ] }</li>` //html2 = html2 + ~
}
html2 += '</ul>' // html2 = html2 + </ul>