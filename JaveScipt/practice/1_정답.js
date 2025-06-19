
///1번
const words = ['apple', 'banana', 'kiwi', 'strawberry'];
function findLongestWord( wordList ){
    let temp = "";
    for( let i = 0 ; i <= wordList.length-1 ; i++ ){
        let word = wordList[i];
        if( word.length > temp.length ){
            temp = word;
        }
    } return temp;
} // apple banana kiwi strawberry
let result3 = findLongestWord( words );
console.log( result3 );


//5번
let array = [];
function func9(){
    console.log("---fucn9 실행---");
    const itemInput = document.querySelector("#itemInput");
        console.log( itemInput );
    const value = itemInput.value;
        console.log( value );
    array.push( value );
    const arrayStatus = document.querySelector("#arrayStatus");
    let html = "";
    for( let i = 0 ; i <= array.length-1 ; i++ ){
        const val = array[i];
        html += `<span>${ val },</span>`
    }
    console.log( html );
    arrayStatus.innerHTML = html;
}