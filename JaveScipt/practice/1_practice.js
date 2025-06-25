// 1번
// 가장 긴 단어 찾기
// 문자열로 이루어진 배열을 매개변수로 받아, for 반복문을 사용해 가장 긴 단어를 찾아 반환하는 findLongestWord 함수를 만드세요. 
// 아래 words 배열로 테스트해 보세요.
// 매개 문자열배열 반환0 명령 가장긴단어찾기


// 2번 
// 세 수 오름차순 정렬
// 서로 다른 세 개의 정수를 입력받아, 오름차순(작은 수부터 큰 수 순서)으로 정렬하여 출력하는 프로그램을 작성하시오.
// 예시: 17, 4, 8 입력 시 4, 8, 17 출력
// let num4 = parseInt(prompt("정수를 입력하세요"));
// let num5 = parseInt(prompt("앞서 입력한 정수 외에 정수를 입력하세요"));
// let num6 = parseInt(prompt("앞서 입력한 정수 외에 정수를 입력하세요2"));
// let numList = [ num4, num5, num6 ];
// //스왑(교체) : 두 자료들 간의 위치를 교체하는 방법, 한 위치에 하나만 저장이 가능하다.
// let temp; //임시변수 선언

// 3번
// 최고 점수 학생 찾기
// 전역변수 students 배열 데이터를 이용하여 , 가장 높은 점수(score)를 가진 학생의 이름을 찾아 반환하는 findTopStudent 함수를 만드세요.
// const students = [
//   { name: '김철수', score: 85 },
//   { name: '이영희', score: 92 },
//   { name: '박민준', score: 78 }
// ];


// 4번
// 영화 평점 시각화하기
// 주어진 영화 이름과 평점 배열을 이용하여, 각 영화의 평점을 별(★)로 시각화하여 HTML에 출력하는 프로그램을 작성하시오.
// (1). 초기 데이터
// 영화 이름과 평점은 두 배열의 동일한 인덱스를 사용합니다.
// let movieNames = ['히든페이스', '위키드', '글래디에이터2', '청설'];
// let movieRatings = [8, 4, 7, 6];
// (2). 구현 조건
// for 반복문을 사용하여 모든 영화를 순회합니다.
// 각 영화의 평점(10점 만점)만큼 꽉 찬 별(★)을, 나머지 점수만큼 빈 별(☆)을 출력합니다.
// 예시: 평점이 8점이면 ★★★★★★★★☆☆ (총 10개의 별)
// 영화 이름과 별점은 HTML에 한 줄씩 표시합니다.
// (3). HTML 출력 예시
// 히든페이스      ★★★★★★★★☆☆
// 위키드          ★★★★☆☆☆☆☆☆
// 글래디에이터2   ★★★★★★★☆☆☆
// 청설            ★★★★★★☆☆☆☆






/* 5번 : input 에서 입력받은 값을 전역 배열에 저장하고 배열 상태를 출력하기. */
// (1) 목표 요소        : #itemInput, #addItemBtn, #arrayStatus
// (2) 사용할 내장 속성/메소드 : let (전역배열), .value, .push(), .textContent
// (3) 처리할 내용      : 버튼 클릭 시 input 값을 배열에 추가하고, 
// 현재 배열의 상태를 div에 출력
// const arrayStatus = document.querySelectorAll("#arrayStatus");
// console.log( arrayStatus );
// function func9(){
//     console.log("func9실행");
//     const itemInput = document.querySelector("#itemInput");
//         console.log( itemInput );
//     const value = itemInput.push
//     arrayStatus.innderHTMl( value );
// }

//<h1> 예제9 </h1> 
//    <input type="text" id="itemInput" placeholder="추가할 항목 입력">
//     <button id="addItemBtn" onclick="func9()">배열에 추가</button>
//     <p>현재 배열 상태:</p>
//     <div id="arrayStatus">[]</div>


// 6번 좌석 예약 상태 표시하기
// 총 6개의 좌석 상태 정보가 담긴 배열을 이용하여, 좌석 배치도와 상태를 HTML에 출력하는 프로그램을 작성하시오.
// (1). 초기 데이터
// 좌석의 상태는 '빈좌석' 또는 '예약석'으로 구성됩니다.
// let seatStatus = ['빈좌석', '예약석', '예약석', '빈좌석', '예약석', '빈좌석'];
// (2). 구현 조건
// for 반복문을 사용하여 6개의 좌석을 모두 출력합니다.
// 각 좌석은 하나의 <div> 태그로 표시합니다.
// 좌석 상태에 따라 <div> 태그에 CSS 색상을 다르게 적용합니다.
// '빈좌석': color: blue;
// '예약석': color: red;
// 좌석은 2칸씩 3줄 형태로 배치합니다.
// (3). 출력 예시 (HTML)
// 빈좌석 예약석   
// 예약석 빈좌석
// 예약석 빈좌석