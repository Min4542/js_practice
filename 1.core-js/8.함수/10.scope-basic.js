function foo(x) {
    var y = 10;
    console.log(x);
    console.log(y);

}


console.log('=====================');
// console.log(y);
// console.log(x);
foo(5);

console.log('=========================');

var z ='global';//전역변수

function bar(){
    var z='local'//지역변수 :함수 안에서 선언된 변수 저장된 메모리가 함수가 끝나면 사라져서 함수 밖에서 쓸 수 없다.
    console.log(`함수내부:${z}`);
}
bar();
console.log(`함수외부:${z}`);