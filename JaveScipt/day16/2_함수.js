//[1]매개변수 x, 반환값 x
function func1(){
    console.log( `func1 exe` );
}
//[2]매개변수 o , 반환값 x  대표함수 : console.log()
function func2( x , y ){
    console.log(`func2 exe${ x+y }`)
}
//[3]매개변수 o , 반환값 o  대표함수 : prompt()
function func3( x, y ){
    console.log( `func3 exe`)
    let result = x + y;
    return result;
}
//[4]매개변수 x , 반환값 o
function func4(){
    console.log(`func4 exe`);
    return "대한민국";
}

//[5]호출
func1( ); // 매개변수 x, 반환값 x
func2( 2 , 3 ); // 매개변수 o , 반환값 x
func3( 1 , 5 ); // 매개변수 o , 반환값 o(변수에 저장x)
let a = func3( 1 , 5 ); // 매개변수 o , 반환값 o(변수에 저장o)
func4(); // 매개변수 x, 반환값 o (변수에 저장할지 말지는 선택)

//[6]지역변수 : 특정한 {}안에서 선언된 변수는 {}밖에서 호출/사용 불가능
// ---> {} 종료되면 종료디는 {}내 선언된 모든 메모리 자동으로 사라진다. <자동관리>
// ---> if(){} , for(){} , func1(){}
let 전역변수 = "대한민국";
if( true ){
    //---인천광역시---//
    let 지역변수1 = "인천광역시";
    console.log( 전역변수 ); // 실행 가능
    console.log( 지역변수1 ); // 실행 가능
    //console.log( 지역변수2 ); // 실행 불가능
    for( let i = 0 ; i < 1 ; i++ ){
        //---부평구---//
        let 지역변수2 = "부평구"; // 실행 가능
        console.log( 전역변수 ); // ok 대한민국
        console.log( 지역변수1 ); // ok 인천광역시
        console.log( 지역변수2 ); // ok 부평구
    }
    //console.log( 지역변수2 ); // 실행 불가능
}
//console.log( 지역변수1 ); //실행 불가능
//console.log( 지역변수2 ); //실행 불가능


//[7]생각해보기 : 다수의 이름을 입력받아 배열 저장
//입력받은 이름 : 지역변수 O / 전역변수 ,
//배열 : 지역변수 / 전역변수 O
let nameList = [];
function nameADD(){
    let name = prompt("이름 : ");
    nameList.push( name );
}
nameADD();
nameADD();
console.log( nameList ); 
//현재 코드 흐름이 58번째일때 기준으로 변수는 총 몇개일까요?
    // vs
let namaList2 = [];
let name1 = prompt("이름 : ");
nameList.push( name1 );
let name2 = prompt("이름 : ");
nameList.push( name2 );
//현재 코드흐름이 65번째일때 변수는 총 몇개일까요? nameList2, name1, name2

//[8]HTML 마크업의 이벤트 속성
function 이벤트함수(){
    console.log("[[클릭]]");
}
//1.js에서 js함수 실행하는 방법
이벤트함수();
//2.HTML에서 js함수 실행하는 방법
//<마크업 이벤트속성명 = "함수명">
