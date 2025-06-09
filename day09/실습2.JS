/*- 문제1
    손님에게 이름과 원하는 음료, 그리고 수량을 순서대로 물어본 후, 모든 정보를 조합하여 
    바리스타가 볼 수 있도록 콘솔에 주문 내역을 출력하는 프로그램을 만드세요.
- 요구사항
    1. prompt()를 사용하여 사용자로부터 다음 정보를 입력받습니다.
    손님의 이름,원하는 음료,주문 수량
    2. let 또는 const를 사용해 입력받은 값들을 각각의 변수에 저장합니다.
    3. console.log()를 사용하여 정해진 형식으로 주문 내역을 콘솔에 출력합니다.
- 출력 예시
    [주문 접수]
    이름 
    김코딩
    메뉴
    아메리카노
    수량
    3잔*/
let name = prompt("이름을 입력하세요");
let drink = prompt("마실 음료를 적어주세요");
let number = prompt("수량을 적어주세요");


console.log("[주문 접수");
console.log("이름");
console.log(name);
console.log("메뉴");
console.log(drink);
console.log("수량");
console.log(number);
