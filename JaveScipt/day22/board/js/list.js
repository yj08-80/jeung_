boardPrint();
function boardPrint(){
    //1.어디에
    const boardTbody = document.querySelector( "#boardTbody")
    //2.무엇을
    //2-1.localStorage에서 배열 가져오기
    let boardList = localStorage.getItem( "boardList" );
    if( boardList == null ){
        boardList = [];
    }else{
        boardList = JSON.parse( boardList );
    }
    //2-2.반복문 이용하여 배열내 하나씩 조회
    let html = "";
    for( let i = 0 ; i <= boardList.length-1 ; i++ ){
        const obj = boardList[ i ];
        html += `<tr>
                    <th>${obj.no}</th>
                    <th><a href = "view.html?no=${obj.no}">${obj.title}</a></th>
                </tr>`
    }
    boardTbody.innerHTML = html;
    //2-3.하나씩 <tr> 구성
    //3.출력
}