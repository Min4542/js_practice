//두 수의  덧셈 결과를 호출부로 전달하는 함수
function add(n1, n2) {
    console.log('hello');
    return n1 + n2;
}

//두수의 곱셈의 결과를 콘솔창에 출력하는 함수
function showMultiply(n1, n2) {
    console.log(`${n1}x${n2}=${n1*n2}`);
}

//함수 안에서는 리턴이 브레이크 역할을 하기도 한다.
function infLooping() {
    var n = 1;
    while (true) {
        console.log(n);
        if (n === 5) return;
        n++
    }
}

//함수가 반환할 수 있는 값은 단 하나입니다.
//그런데 2개의 정수를 전달받아 덧셈,뺄셈,곱셈,나눗셈 값을 모두 리턴하고 싶다.

function operatrAll(n1,n2) {
    return {
        plus: n1+n2,
        minus: n1-n2,
        multi: n1*n2,
        divide: n1/n2
    };
}
function operatrAll2(n1,n2) {
    return[ 
         n1+n2,
         n1-n2,
         n1*n2,
         n1/n2
    ];
}

var result = add(10, 20);

console.log(add(5, 10)); //console.log(15);

//            add(add(10,10),add(20,20))
//            add(20,40)
//            add(60)
var result2 = add(add(10, 10), add(add(15, 5), 20)) //제일 안쪽부터 콜이 된다.왼->오
console.log(`result2: ${result2}`);

var rn = Math.floor(Math.random() * 10 ** 1);

//리턴값이 없는 함수는 변수에 저장하거나 다른 함수의 인수로 
//전달하지 않고 단독호출해서 사용합니다.
showMultiply(3, 4);

infLooping();


var results = operatrAll(20,5);
console.log(`덧셈결과:${results.plus}`);
console.log(`뺄셈결과:${results.minus}`);

var results2 = operatrAll2(20,5);
console.log(`덧셈결과:${results2[0]}`);