function showNumbers(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}
// showNumbers(5);

function showOddNumbers(n) {
    for (var i = 1; i <= n; i++) {
        if (i % 2 === 1) {
            console.log(i);
        }
    }
}

// showOddNumbers(10);


function showEvenNumbers(n) {
    for (var i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}




//콜백 함수
function showAllNumbers(n,condition) {
    for (var i =1; i <= n; i++){
        if(condition(i)){
            console.log(i);
        }
    }
}

// showAllNumbers(10,function(i) {
//     return i%2===0;
// });


//콜백함수는 함수 호출자(사용자)가 기본기능은 만든사람에게 맡기고 
//커스텀기능을 스스로 생성해서 사용하고 싶을 때 쓰는 기법입니다.○
showAllNumbers(10,(i)=>i%2===0);


console.log('========================');

//숫자배열을 전달하면 해당 배열을 조건부로 필터링하여
//복사배열을 만들어주는 함수
//[1,2,3,4,5,6,7,8,9,10]을 전달하면서 짝수조건을 걸면
//[2,4,6,8,10]

function filter(array,filterCondition) {
    //필터링할 배열 
    var filteredArray = [];
    for(var n of array){
        if(filterCondition(n)){
            filteredArray.push(n);
        }
    }
    return filteredArray;
}

var numbers=[1,2,3,4,5,6,7,8,9,10];

var result = filter(numbers,n=>n%3===0);
console.log(result);




