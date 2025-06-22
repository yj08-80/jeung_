// [실습8]
// 문제 1: prompt로 제품 정보 객체 만들기
// prompt를 세 번 사용하여 사용자로부터 '제품명', '가격', '제조사'을 순서대로 입력받습니다. 
// 입력받은 정보로 하나의 product 객체를 생성하고, 생성된 객체를 콘솔에 출력하시오.
// let 제품명 = prompt("제품명을 입력하세요");
// let 가격 = prompt("가격을 입력하세요");
// let 제조사 = prompt("제조사를 입력하세요");
// //방법1 : 배열일 때
// const array = [제품명, 가격, 제조사];
// //방법2 : 객체일 때
// const products = { "제품명" : 제품명 , "가격" : 가격 , "제조사" : 제조사 };
// console.log( products );
// //방법3 : 만일 속성명과 자료의 변수명이 일치하면 **속성명 생략** 자동으로 변수명을 속성명으로 정의한다.
// const products1 = { 제품명, 가격, 제조사 };
// console.log( products1 );


// 문제 2: prompt로 회원 가입 및 아이디 중복 확인 기능 구현
// prompt를 세 번 사용하여 사용자로부터 '아이디', '비밀번호', '이름'을 순서대로 입력받습니다.
// 입력받은 정보로 하나의 member 객체를 생성하고, members 배열에 저장하여 배열을 콘솔에 출력하시오.
// 단] 입력받은 아이디가 이미 배열에 존재하면 '존재하는 아이디 입니다'를 출력하고 배열에 등록하지 않습니다.
// const members = [ 
//     { id: 'user1', password: 'pass1', name: '사용자1' },
//     { id: 'user2', password: 'pass2', name: '사용자2' },
// ];
// let id = prompt('아이디 : ');
// let pwd = prompt('비밀번호 : ');
// let name = prompt('이름 : ');
// let member = { id : id , pwd : pwd , name : name } // 2. 입력받은 정보(여러변수)로 하나의 member 객체
// let idCheck = false; // 중복이 있다(true)/없다(false) 기억하기 위한 변수 
// for( let index = 0 ; index <= members.length -1 ; index++ ){
//     let member = members[index]; // index번째의 member 객체 꺼내기(조회)
//     if( member.id == id ){ // index번째의 member객체내 id속성값이 입력받은 id 와 같으면
//         idCheck = true; // 중복 체크!!! 
//         break; // 반복문 종료 
//     }  // ******** 아직 모두 조회된 상태가 아니므로 for문 안에서 배열에 저장 하지 않는다. ***********
// } // for end 
// if( idCheck == false ){ 
//     members.push(member);  
//     console.log( '등록 성공');
// } else{  
//     console.log( '등록 실패'); 
//}
// 1. prompt를 세 번 사용 : "아이디", "비밀번호", "이름"을 순서대로 입력받습니다
// 2. 입력받은 정보로 하나의 member 객체
// // 입력받은 아이디가 중복값이 존재하는지 확인
// 3. member 객체, members 배열에 저장
// 4. members 배열을 콘솔에 출력하시오.
// const members = [
//   { id: 'user1', password: 'pass1', name: '사용자1' },
//   { id: 'user2', password: 'pass2', name: '사용자2' },
// ];
// let id = prompt("아이디를 입력하세요");
// let pwd = prompt("비밀번호를 입력하세요");
// let name = prompt("이름을 입력하세요");
// let member = { id : id , password : pwd , name : name };
// for( index = 0 ; index <= members.length-1 ; index++ ){ 
//   let member2 = members[index];   // { id: 'user1', password: 'pass1', name: '사용자1' }
//   if( member2.id == member.id ){
//     members.push( member )
//     console.log( members );
//   }else{
//     console.log("존재하는 아이디 입니다.");
//   }
// }


// 문제 3: 객체 배열의 속성 값 평균 구하기
// scores 배열에 담긴 모든 학생의 수학(math) 점수 평균을 계산하여 콘솔에 출력하시오.
// const scores = [
//   { name: 'A', math: 80, science: 92 },
//   { name: 'B', math: 95, science: 88 },
//   { name: 'C', math: 76, science: 78 }
// ];

// const scores = [
//   { name: 'A', math: 80, science: 92 },
//   { name: 'B', math: 95, science: 88 },
//   { name: 'C', math: 76, science: 78 }
// ];
// // 1.scores배열 안에서 객체를 하나씩 꺼낸다.
// let 합계 = 0;
// for( i = 0 ; i <= scores.length-1 ; i++ ){
//   let score = scores[i]; //{ name: 'A', math: 80, science: 92 }
//   합계 += score.math// 2.객체 안에서 math값을 꺼낸다. 80, 95,76
// }
// console.log( 합계 / scores.length );
//     // 3.math 값의 평균을 구한다.
//     // 4.console에 출력한다.


// 문제 4: 특정 조건을 만족하는 객체 찾기
// products 배열에서 id가 3인 상품 객체를 찾아, 해당 객체 전체를 콘솔에 출력하시오.
// 일치하는 객체가 없으면 "상품을 찾을 수 없습니다."를 출력합니다.
// const products = [
//   { id: 1, name: '사과' },
//   { id: 2, name: '바나나' },
//   { id: 3, name: '포도' },
//   { id: 4, name: '딸기' }
// ];
// const products = [
//   { id: 1, name: '사과' },
//   { id: 2, name: '바나나' },
//   { id: 3, name: '포도' },
//   { id: 4, name: '딸기' }
// ];
// for( i = 0 ; i <= products.length-1 ; i++ ){
//   let product = products[i];
//   if( product.id == 3 ){
//     console.log( product );
//     break;
//   }
// }
// const products = [
//   { id: 1, name: '사과' },
//   { id: 2, name: '바나나' },
//   { id: 3, name: '포도' },
//   { id: 4, name: '딸기' }
// ];
// let idCheck1 = false;
// for( i = 0 ; i <= products.length-1 ; i++ ){
//   let product = products[i];
//   if( product.id == 3 ){
//     idCheck1 = true;
//     console.log( product );
//     break;
//   }
// }
// if( idCheck1 ==  false ){
//   console.log("상품을 찾을 수 없습니다");
//}
// 문제 5: 객체 배열 필터링하기
// users 배열에서 isActive가 true인 사용자들만으로 구성된 새로운 배열 activeUsers를 만들고, 이 배열을 콘솔에 출력하시오.
// const users = [
//   { id: 1, name: '유저1', isActive: true },
//   { id: 2, name: '유저2', isActive: false },
//   { id: 3, name: '유저3', isActive: true },
//   { id: 4, name: '유저4', isActive: false }
// ];
// const users = [
//   { id: 1, name: '유저1', isActive: true },
//   { id: 2, name: '유저2', isActive: false },
//   { id: 3, name: '유저3', isActive: true },
//   { id: 4, name: '유저4', isActive: false }
// ];
// let activeUsers= [];
// for( i = 0 ; i <= users.length-1 ; i++ ){
//   let user = users[i];
//   if( user.isActive == true ){
//     activeUsers.push( user );
//   }
// }
// console.log( activeUsers );

// 문제 6: 객체 배열 데이터 변환하기
// movies 배열에 있는 각 영화 객체에서 title 속성만 추출하여, 영화 제목들로만 이루어진 새로운 배열 movieTitles를 만들고 콘솔에 출력하시오.
// const movies = [
//   { title: '인셉션', director: '크리스토퍼 놀란' },
//   { title: '기생충', director: '봉준호' },
//   { title: '매트릭스', director: '워쇼스키 자매' }
// ];
// const movies = [
//   { title: '인셉션', director: '크리스토퍼 놀란' },
//   { title: '기생충', director: '봉준호' },
//   { title: '매트릭스', director: '워쇼스키 자매' }
// ];
// let movieTitles = [];
// for( i = 0 ; i <= movies.length-1 ; i++ ){
//   let movieTitle = movies[i];
//   movieTitles.push( movieTitle.title );
// }
// console.log( movieTitles );


// 문제 7: 데이터 그룹화하기
// 다음 team 배열을 department를 기준으로 그룹화하여, 아래 result와 같은 형태로 만드시오.
// const team = [
//   { name: '철수', department: '개발팀' },
//   { name: '영희', department: '기획팀' },
//   { name: '민수', department: '개발팀' },
//   { name: '지혜', department: '기획팀' }
// ];
// // 최종 결과 형태 (result)
// // {
// //   '개발팀': ['철수', '민수'],
// //   '기획팀': ['영희', '지혜']
// // }
// const team = [
//   { name: '철수', department: '개발팀' },
//   { name: '영희', department: '기획팀' },
//   { name: '민수', department: '개발팀' },
//   { name: '지혜', department: '기획팀' }
// ];
// let 개발팀 = [];
// let 기획팀 = [];
// for( i = 0 ; i <= team.length-1 ; i++ ){
//   let teamname = team[i];
//   if( teamname.department == "개발팀" ){
//     개발팀.push( teamname.name );
//   }else{
//     기획팀.push( teamname.name );
//   }
// }
// console.log( `개발팀 : [${개발팀}] , 기획팀 : [${기획팀}]` );


//방법2
// let result2 = {}; 미리 부서명 배열 정의하지 않고
// for( let index = 0 ; index <= team.length -1 ; index++ ){ 
//   let t = team[index];
//   if( result2[ t.department ]){ result2에 index번째의 부서명이 존재하면
//     result2.[t.department ].push( t.name ); 부서명 배열에 index번째 이름 넣어준다
//   }else{ 존재하지 않으면 새로운 배열을 생성하고 초기값으로 index번째 이름 넣어준다
//     result2[ t.department ] = [ t.name ]; 배열 생성
//     result2.기획팀.push( t.name );
//   }
// }


// 문제 8: 장바구니 총액 계산하기
// 고객의 장바구니 정보를 담은 cart 배열과 상품 정보를 담은 productsInfo 배열이 있습니다.
// cart 배열: 각 요소는 고객이 담은 상품의 id와 quantity(수량)를 가집니다.
// productsInfo 배열: 각 요소는 상품의 고유 id와 price(가격)를 가집니다.
// cart 배열을 기준으로, 장바구니에 담긴 모든 상품의 총 결제 금액을 계산하여 콘솔에 출력하세요.
// const cart = [{ id: 1, quantity: 2 },{ id: 3, quantity: 1 }];
// const productsInfo = [
//   { id: 1, price: 1000 },
//   { id: 2, price: 5000 }, // 장바구니에 없는 상품
//   { id: 3, price: 2500 }
// ];
// const cart = [{ id: 1, quantity: 2 },{ id: 3, quantity: 1 }];
// const productsInfo = [
//   { id: 1, price: 1000 },
//   { id: 2, price: 5000 }, // 장바구니에 없는 상품
//   { id: 3, price: 2500 }
// ];
// let sumPrice = 0;
// for( i = 0 ; i <= cart.length-1 ; i++ ){
//   let cartName = cart[i];
//   for( j = 0 ; j <= productsInfo.length-1 ; j++ ){
//     let productInfo = productsInfo[j];
//     if( cartName.id == productInfo.id ){
//       let price = cartName.quantity * productInfo.price;
//       sumPrice += price;
//     }
//   }
// }
// console.log( sumPrice );


// 문제 9: 투표 결과 집계하기
// 다음 votes 배열은 투표 결과를 나타냅니다. 각 후보가 몇 표를 받았는지 집계하여, 
// 후보의 이름이 키이고 득표수가 값인 객체를 만들어 콘솔에 출력하시오.
// const votes = ['A', 'B', 'B', 'C', 'A', 'B', 'A'];
// // 출력 예시: { A: 3, B: 3, C: 1 }
// let A = 0;
// let B = 0;
// let C = 0;
// const votes = ['A', 'B', 'B', 'C', 'A', 'B', 'A']
// for( let i = 0 ; i <= votes.length-1 ; i++ ){
//   let vote = votes[i];

//     if( vote == "A"){
//       A+=1;
//     }
//     if( vote == "B"){
//       B+=1;
//     }
//     if( vote == "C"){
//       C+=1;
//     }
// }
// console.log(`A:${A}, B:${B}, C:${C}`);




// 문제 10: 웹툰 평점 시각화하기
// webtoons 배열의 데이터를 이용하여, 각 웹툰의 평점을 별(★, ☆)로 시각화하여 HTML에 출력하시오.
// 조건 1: 평점(rating)은 10점 만점입니다.
// 조건 2: 평점의 정수 부분만큼 꽉 찬 별(★)을, 10 - 정수 만큼 빈 별(☆)을 출력합니다. (예: 평점이 8.5이면 ★ 8개, ☆ 2개)
// 조건 3: HTML에 웹툰 제목과 변환된 별점을 한 줄씩 출력합니다.
// const webtoons = [
//   { title: '나 혼자만 레벨업', rating: 9.8 },
//   { title: '유미의 세포들', rating: 9.9 },
//   { title: '전지적 독자 시점', rating: 9.7 }
// ];
// /* HTML 출력 예시:
//    나 혼자만 레벨업 ★★★★★★★★★☆
//    유미의 세포들 ★★★★★★★★★☆
//    전지적 독자 시점 ★★★★★★★★★☆
// */
const webtoons = [
  { title: '나 혼자만 레벨업', rating: 9.8 },
  { title: '유미의 세포들', rating: 9.9 },
  { title: '전지적 독자 시점', rating: 9.7 }
];
let html = "";
for (let i = 0; i < webtoons.length; i++) {
  let webtoon = webtoons[i];
  let title = webtoon.title;
  let rating = webtoon.rating;
  let blackStar = parseInt( rating );
  html += `<div>${title} `;

  for (let h = 1; h <= 10; h++) {
    if (h <= blackStar) {
      html += `<span>★</span>`;
    } else {
      html += `<span>☆</span>`;
    }
  } html += `</div>`;
}
document.write( html );



// 문제11 : 공공데이터 포털 : 인천 부평구 맛집 현황 테이블 만들기
// [구현 조건]
//   1. 공공데이터 포털에서 '인천광역시 부평구_맛있는 집(맛집) 현황' 의 open API 신청하여 결과를 복사하여 'response' 변수에 저장하시오.
//   let response = {}
//   2. response 객체 안의 data 배열을 반복문을 사용하여 순회합니다.
//   3. 각 동(행)의 정보를 표시할 HTML <table> 태그를 문자열로 만듭니다.
//   4. 테이블의 각 셀에는 '업 소 명', '세대수', '소재지', '지정메뉴', '전화번호','업태' 정보가 순서대로 포함되어야 합니다.
//   5. 최종적으로 완성된 HTML 테이블 문자열을 document.write() 사용하여 화면에 출력합니다.
// [ 공공데이터 open API 신청 ]
//   1. 공공데이터 포털 : https://www.data.go.kr
//   2. 회원가입/로그인
//   3. '부평구 맛집' 검색
//   4. '인천광역시 부평구_맛있는 집(맛집) 현황' Open API를 찾아 [활용신청] 버튼을 누르고, 절차에 따라 인증키를 발급받습니다.
//   5. 인증키 설정 ( Encoding , Decoding 순서대로 대입하여 설정 )
//   6. 인증키 설정 후 'API 목록' 에서  [Open Api 호출] 합니다.
//   7. **실행 결과(JSON)**를 전체 복사합니다.  

let response = {
  "currentCount": 10,
  "data": [
    {
      "소재지": "인천광역시 부평구 동암산로 10 (십정동)",
      "업 소 명": "(주)온누리푸드온누리장작구이",
      "업태": "한식",
      "연번": 1,
      "전화번호": "032-526-9292",
      "지정메뉴": "오리훈제"
    },
    {
      "소재지": "인천광역시 부평구 안남로417번길 20, 2층 (청천동)",
      "업 소 명": "1982삼계정",
      "업태": "한식",
      "연번": 2,
      "전화번호": "032-512-1982",
      "지정메뉴": "녹두삼계탕"
    },
    {
      "소재지": "인천광역시 부평구 부평대로 301 (청천동,남광센트렉스 111호)",
      "업 소 명": "갈비가",
      "업태": "한식",
      "연번": 3,
      "전화번호": "032-363-3787",
      "지정메뉴": "속초코다리냉면"
    },
    {
      "소재지": "인천광역시 부평구 평천로 553(삼산동)",
      "업 소 명": "경복궁삼계탕",
      "업태": "한식",
      "연번": 4,
      "전화번호": "032-511-1494",
      "지정메뉴": "들깨삼계탕"
    },
    {
      "소재지": "인천광역시 부평구 길주남로 109,1층 (부개동,송현주택)",
      "업 소 명": "곱창마당",
      "업태": "한식",
      "연번": 5,
      "전화번호": "032-271-2292",
      "지정메뉴": "한우곱창모듬구이"
    },
    {
      "소재지": "인천광역시 부평구 부평대로63번길 10-11 (부평동)",
      "업 소 명": "금강산추어탕",
      "업태": "한식",
      "연번": 6,
      "전화번호": "032-527-8118",
      "지정메뉴": "추어탕"
    },
    {
      "소재지": "인천광역시 부평구부평대로87번길 4(부평동)",
      "업 소 명": "뉴욕반점",
      "업태": "중식",
      "연번": 7,
      "전화번호": "032-516-4488",
      "지정메뉴": "삼선짬뽕,찹쌀탕수육"
    },
    {
      "소재지": "인천광역시 부평구 신트리로22번길 15-14 (부평동, 1층 일부)",
      "업 소 명": "더히든키친",
      "업태": "양식",
      "연번": 8,
      "전화번호": "032-272-7276",
      "지정메뉴": "바질페스토파스타"
    },
    {
      "소재지": "인천광역시 부평구 마장로 402(청천동)",
      "업 소 명": "덕수갈비",
      "업태": "한식",
      "연번": 9,
      "전화번호": "032-517-4070",
      "지정메뉴": "왕갈비탕"
    },
    {
      "소재지": "인천광역시 부평구 대정로 93, 웰링턴 1층 103호 (부평동)",
      "업 소 명": "동강해물탕",
      "업태": "한식",
      "연번": 10,
      "전화번호": "032-524-9166",
      "지정메뉴": "해물탕"
    }
  ],
  "matchCount": 70,
  "page": 1,
  "perPage": 10,
  "totalCount": 70
}


//1. 공공데이터 포털에서 '인천광역시 부평구_맛있는 집(맛집) 현황' 의 open API 신청하여 결과를 복사하여 'response' 변수에 저장하시오.
//   let response = {}
//   2. response 객체 안의 data 배열을 반복문을 사용하여 순회합니다.
//   3. 각 동(행)의 정보를 표시할 HTML <table> 태그를 문자열로 만듭니다.
//   4. 테이블의 각 셀에는 '업 소 명', '세대수', '소재지', '지정메뉴', '전화번호','업태' 정보가 순서대로 포함되어야 합니다.
//   5. 최종적으로 완성된 HTML 테이블 문자열을 document.write() 사용하여 화면에 출력합니다.
let html1 = `<table border="1">`;
html1 += `<tr>
  <th>업소명</th>
  <th>세대수</th>
  <th>소재지</th>
  <th>지정메뉴</th>
  <th>전화번호</th>
  <th>업태</th>
  </tr>`
for( let i = 0 ; i <= response.data.length-1 ; i++ ){
    let data = response.data[i];
    html1 += `<tr>
      <td>${data["업 소 명"]}</td>
      <td>${data["세대수"]}</td>
      <td>${data["소재지"]}</td>
      <td>${data["지정메뉴"]}</td>
      <td>${data["전화번호"]}</td>
      <td>${data["업태"]}</td>
    </tr>`
  }
  html1 += '</table>'
document.write( html1 );