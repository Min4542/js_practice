const pi = 3.14159265;
// pi = 6.666;
console.log(`pi:${pi}`);

//세율
const TAX_RATE = 0.1;

let preTaxPrice = 100; //세전가격
//세후 가격
let afterTaxPrice = preTaxPrice + (preTaxPrice * TAX_RATE);


//const와 객체 (배열,객체)
const person = {
    name: 'park'
};

// person = {
//     name:'lee'
// };

person.name = 'kim';
person.age = 20;

const arr = [1, 2, 3];
// arr = ['a','b','c'];

arr[1] = 20;

//습관적으로 const로 선언하고 나중에 let으로 바꾼다.

//=========================================================================//

const x = 10;
const y = 20;

function foo() {


}



function bar() {

}

//즉시 실행함수
(function () {
    //실제 실행코드
    foo();
    const z = 10;
    bar()
})();