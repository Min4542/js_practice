// +연산은 숫자를 문자열로 만들고 진행한다. 
var ex = 10 + '20';

console.log(ex);


//문자 100이 된다.
ex = 100 + '';

var logical = true + '';
console.log(typeof logical);

// 문자열은 +연산이외에는 문자열이 숫자로 변환 했을때 정상적인 숫자가 나오면 숫자로 계산한다. 

var x = 100 - '30';
console.log(x);