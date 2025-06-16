//[1]객체 선언
{ }
//[2]객체된 객체를 변수에 대입
const obj1 = { };
console.log( obj1 ); //Object
//[3]객체 선언시 속성(properties) 구성 , { 속성명 : 자료, 속성명 : 자료, 속성명 : 자료 }
// 속성명은 임의로 작성하되, 특수문자가 포함된 경우는 문자처리("")를 꼭 해야함
// - 속성명과 자료의 한쌍(entry)하고, (쉼표) 구분하여 여러개 쌍(entry)을 {}로 감싼다
// - 속성명(=key)은 자료를 식별하는 목적으로 중복 이름이 불가능
const obj2 = { 속성명1 : 10, "속성명2" : " hello" };
console.log( obj2 );

// [4] 객체 호출
        //변수명 : 전체 호출
console.log( obj2 );
        //특정한 값을 호출 : 변수명.속성명 , .(접근연산자/도트연산자) 특정한 위치로 이동한다는 뜻
console.log( obj2.속성명1 ); // 10
        //특정한 값을 호출2 : 변수명["속성명"]
console.log( obj2["속성명2"]); //hello
        //Object.keys( 변수명 ) : 객체 내 모든 속성명(key)을 배열로 반환
console.log( Object.keys( obj2 ) ); //['속성명1', '속성명2']
        //Object.values( 변수명 ) : 객체 내 모든 자료(value)를 배열로 반환
console.log( Object.values( obj2) );//[10."hello"]
        //Object.entries( 변수명 ) : 객체 내 모든 엔트리(entry)를 배열로 반환
console.log( Object.entries( obj2 ) ); // ["속성명1" , 10], ["속성명2" , "hello"];

// [5]객체 내 속성 추가/수정/삭제
// 추가 : 변수명.새로운속성명 = 자료, 변수명["새로운속성명"] = 자료
obj2.속성명3 = true;
console.log( obj2 );
// 수정 : 변수명.속성명 = 새로운자료, 변수명["속성명"] = 새로운자료
obj2.속성명1 = 20;
console.log( obj2 );
// 삭제 : delete 변수명.삭제할속성명
delete obj2.속성명3;
console.log( obj2 );

// [6]객체 속성 내 자료 , 자료에는 변수값, 리터럴값, 객체, 배열, 함수 등 모든 자료가 대입됨
let var1 = 10;
const var2 = { props1 : 3.14, props2 : var1, props3 : { }, props4 : [ ], props5 : function(){} };



// [7] in연산자, 객체 내 특정한 속성이 있는지 확인, "찾을속성명" in 변수명
console.log( "props1" in var2 ); //존재하면 true
console.log( "props6" in var2 ); //존재하지 않으면 false

// [8] 배열과 객체 조합
// - 공통점 : 여러 개 자료들을 하나의 자료로 묶는다
// - 차이점 : 배열은 인덱스로 자료를 구분 vs 객체는 속성명으로 자료를 구분
// - 동일한 자료의 의미를 가질 때는 배열, 서로 다른 자료의 의미를 가질 때는 객체
//["콜라", 1000] -> 콜라와 1000은 의미가 다르기 때문에 객체로 구분 권장
const 제품 = { 제품명 : "콜라", "가격" : 1000 }
//{ 제품명 : "사이다", "가격" : 2000 }
//{ 제품정보1, 제품정보2 } -> 같은 의미를 지니기 때문에 객체보다는 배열 권장
const 제품목록 = [ { 제품명 : "사이다", "가격" : 2000 },{ 제품명 : "사이다", "가격" : 2000 } ];
// + 반복문 : 변수가 가지는(참조하는) 정보를 찾아가기
// 제품목록(변수)->요소(배열)->속성값(객체), **변수명[인덱스].속성명**
for( let index = 0 ; index <= 제품목록.length-1 ; index++ ){
    const product = 제품목록[index]; // index번째의 제품(객체)
    console.log( product.제품명 ); // index번째의 제품의 속성값 호출
    console.log( product["가격"]);
}