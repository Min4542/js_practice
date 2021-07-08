
//2개의 정수의 합을 구하는 함수
function add2(n1,n2){
    return n1+n2;
}

//n개의 정수의 합을 구하는 함수
 function addAll(numbers){
    var total = 0;
    for(var n of numbers){
        total+=n;
    }
    return total;
 }

 var result=addAll([12,34,56]);
 console.log(result);

//스프레드 문법(ES6+)
//알아서 배열로 묶어줌
 function addAll2(...numbers){
    var total = 0;
    for(var n of numbers){
        total+=n;
    }
    return total;
 }
 var result2=addAll2(10,20,30,100)
 console.log(`result2:${result2}`);