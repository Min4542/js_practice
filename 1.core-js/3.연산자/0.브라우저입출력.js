// 아래의 두 함수는 node.js환경에서는 작동하지 않고
// 브라우저에서만 동작하는 함수입니다. 
//prompt() : 브라우저를 통해 값을 입력받는 함수
//alert() : 브라우저를 통해 값을 출력하는 함수

//propt함수는 기본적으로 입력값을 문자열로 처리합니다.
//숫자로 바꾸기위해서는 숫자변환을 해야 합니다.
//숫자변환은 앞에 + 기호를 붙입니다.
var num1 = +prompt('첫번째 숫자를 입력하세요.');
var num2 = +prompt('두번째 숫자를 입력하세요.');


alert(`입력한 두 수의 합은 ${num1+num2}입니다.`);

