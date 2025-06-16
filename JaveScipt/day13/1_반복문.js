//[1] i : 반복변수(반복문의 반복횟수 체크하는 변수 목적
for( let i = 1 ; i <= 3 ; i++ ){
    console.log( i );
}
/* ---순서도(알고리즘)---
    1.let i = 1
    2.i <= 3  true
    3.console.log( i ); -> console.log( 1 );
    4.i++
    5.i <= 3  true
    6.console.log( i ); -> console.log( 2 );
    7.i++
    8.i <= 3  true
    9.console.log( i ); -> console.log( 3 );
    10.i++
    11.i <= 3  false
*/

//[2] for 중첩 : for{} 안에 for{} 포함
for ( let i1 = 1 ; i1 <= 2 ; i1++ ){ // i1는 1부터 2 이하까지 1씩 증가
    console.log( i1 );
    for( let h = 1 ; h <= 3 ; h++ ){ // h는 1부터 3까지 1씩 증가
        console.log( h );
    }
} // 1 1 2 3 2 1 2 3
// i1 = 1 -> h = 1 , h = 2, h = 3
// i2 = 2 -> h = 1, h = 2, h = 3


//[3] 구구단
//1.단 패턴 : 2부터 9까지 1씩 증가
for( let 단 = 2 ; 단 <=9 ; 단++ ){
    console.log( 단 ); // 2 3 4 5 6 7 8 9
}
//2.곱 패턴 : 1부터 9까지 1씩 증가
for( let 곱 = 1 ; 곱 <= 9 ; 곱++ ){
    console.log( 곱 ); // 1 2 3 4 5 6 7 8 9
}
//3.합치기 : 단마다 곱 반복(포함) 해야한다.
for( let 단 = 2 ; 단 <=9 ; 단++ ){
    for( let 곱 = 1 ; 곱 <= 9 ; 곱++ ){
    console.log( `${단}X${곱}` );
}
}

//[4] 아래 같으 모양으로 출력하시오.
/*
*               line    star
**              1       1
***             2       1 2
****            3       1 2 3
*****           4       1 2 3 4 이런식
*/              
//line 1부터 5까지 1씩 증가
//star 1부터 현재줄(1/2/3/4/5)까지 1씩 증가 , (1/2/3/4/5)
let output = "";
for( let line = 1 ; line <= 5 ; line++ ){ // line은 1부터 5이하까지 1씩 증가
    for( let star =  1 ; star <= line ; star++ ){
        output += "*"
    }
    output +="\n";
}console.log( output ); // output = "*\n**\n***\n****\n*****\n"

//[ 반복문 제어 키워드 ]
//(1)continue;  : 가장 가까운 for{}문의 증감식으로 (코드흐름)이동, 코드흐름이 continue를 만나면 아래 식이 실행되지 않고 증감식으로 다시 이동
//  i는 1부터 5까지 출력, 단 3이면 출력하지 않는다.
for ( let i = 1 ; i <= 5 ; i++){
    //단 3이면 출력하지 않는다
    if( i == 3 ){ continue; }
    console.log( i ); // 1 2 3 4 5
}
//(2)break;     : 가장 가까운 for{]문의 종료/탈출/끝내기
//  1부터 10까지 누적합계, 단 누적합계가 10초과되면 종료한다.
let sum = 0;
for( let i = 1 ; i <= 10 ; i++ ){
    sum += i;
    if( sum > 10 ){ break; } //코드흐름이 break 만나면 for{} 종료한다.
}
console.log( sum ); // 15

//(3)무한루프 : for ( ; ; ){}
// for( ; ; ){console.log"무한출력"};}

// [생각해보기]1~45 사이의 6개 정수를 입력받아 하나의 배열에 저장하시오. <로또번호>
// -조건 : 1~45 사이 -조건2 : 중복값 제외 -조건3 : 총 6개 숫자만
let numList = [] ;// (1) 입력받은 6개 수를 저장하는 빈 배열 선언, < 고객이 선택한 로또 번호 >
//(2) 무한루프 이용하여 반복적으로 입력받기
for( ; ; ){
    let num = prompt("로또 번호 입력 : "); //입력받은 값을 변수에 저장
    // 조건 1 : 만약에 입력받은 값이 1~45 사이가 아니면
    if( num < 1 || num > 45 ){ //1보다 작고 45보다 초과
        console.log( "[경고] 1~45 사이만 입력해주세요.");
        continue;
    }
    // 조건 2 : 만약에 입력받은 값이 1~45 내의 값이면
    if( numList.indexOf( num ) != -1 ){
        console.log("[경고] 이미 선택한 수입니다.");
        continue;
    }
    // 배열 저장
    numList.push( num );
    // 만약에 배열에 저장된 자료가 6개이면 무한반복(입력) 종료
    if( numList.length == 6 ){
        break; // 가장 가까운 for{} 중단
    }
}
console.log( numList ); //배열 출력
