//즉시실행 함수
//함수 정의부와 실제 로직의 실행부를 나누기 위함
//다른 언어의 main함수처럼 사용
(function (name) {
    console.log(`${name}님 안녕안녕~`);
})('둘리');

//재귀 함수
console.log('===================');

function countdown(n) {
    // if (n < 0) return;
    // console.log(n);
    // countdown(n - 1);
    for (var i = n; i >= 0; i--) {
        console.log(i);
    }
}

//재귀함수 호출
countdown(5);




//중첩 함수
console.log('==================');

function outer() {
    console.log('outer call~~');
    var x = 1;


    //중첩함수는 바깥쪽함수의 전요함수로서 바깥쪽 함수 내부에서만 호출 가능합니다.
    function inner() {
        console.log('inner call~~~~');
        var y = 2;
        console.log(x + y);
    }
    inner();
}

outer();



//함수 리터럴, 화살표 함수 (ES6+)

//함수 리터럴
var add = function (n1, n2) {
    return n1 + n2;
};
add(4, 5);

//화살표 함수
var add = (n1, n2) => {
    return n1 + n2;
};
add(4, 5);

var add = (n1, n2) => n1 + n2; //한줄 시 작성 법

add(4.5, 5);


var sayHello = function () {
    console.log('ㅎㅇ');
};

var sayHello = () => console.log('ㅎㅇ');

sayHello();


var isEvenNumber = function (n) {
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

var isEvenNumber = function (n) {
    return n % 2 === 0 ? true : false;
};

var isEvenNumber = function (n) {
    return n % 2 === 0;
};

var isEvenNumber = (n) => n % 2 === 0;


var result = isEvenNumber(60);

console.log(`result:${result}`);

/* 
정수 n을 전달하면 n의 제곱값을 리턴하는 화살표 함수 doubleMultiply를 작성하세요.
*/

var  doubleMultiply = n => n**2; 





