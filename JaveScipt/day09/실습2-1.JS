/*- 문제2
    사용자에게 이름과 오늘 한 운동 종류, 그리고 **운동 시간(분)**을 순서대로 물어본 후, 
    입력된 정보를 바탕으로 콘솔에 오늘의 운동 기록을 보기 좋게 출력하는 프로그램을 만드세요.
- 요구사항
    1.prompt()를 사용하여 다음 정보를 입력받습니다.
    사용자의 이름
    운동 종류
    운동 시간 (분 단위)
    2.let 또는 const를 사용해 입력받은 값들을 각각의 변수에 저장합니다.
    3.console.log()를 사용하여 정해진 형식으로 운동 기록을 콘솔에 출력합니다.
    4.분당 소모 칼로리(예: 1분당 7칼로리)를 곱해서 총 소모 칼로리를 계산하고 콘솔에 함께 출력해 보세요.
- 출력 예시
    [운동 기록] 
    이름
    박건강
    운동종류
    달리기 운동
    운동시간
    45
    칼로리
    315

[제출방법] : 코드가 작성된 GIT 상세주소를 제출하시오.*/

let name = prompt("이름을 입력하세요");
let exercise = prompt("어떤 운동을 하시나요?")
let time = prompt("얼마나 운동 하시나요?(분 단위로 적어주세요)");
let calories = time * 7

console.log("[운동 기록]");
console.log(name);
console.log("운동종류");
console.log(exercise);
console.log("운동시간");
console.log(time);
console.log("칼로리");
console.log(calories);

