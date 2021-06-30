var greeting;
greeting = 'helllo';
greeting = "안녕?";
greeting = `안녕?`;

console.log(typeof greeting);


var exStr = '그는 나에게 "위험해"라고 말했다!';

exStr = "Let's go!";

exStr = '그는 나에게 \"위험해"\라고 말했다!';

console.log(exStr);

var filePath = 'D:\\temp\\new.jpg'
console.log(filePath);

// 템플릿 리터럴 (ES6+)

console.log("====================");

var template = `  <ul>
                    <li>
                        <a href="#">HOME</a>
                    <li>
                <ul>
`;

console.log(template);

console.log("====================");

var month = 8;
var day = 15;
var anni = '광복절';


// console.log(month + '월 ' + day + '일은 ' + anni +'입니다. ');
console.log(`${month}월은 ${day}일은 ${anni}입니다.`);


var x = '100';
var y = '200';
console.log(x + y); //결합 연산