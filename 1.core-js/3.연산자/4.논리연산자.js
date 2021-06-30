
var t = true,f = false;

//AND 연산
console.log(t&&t);
console.log(t&&f);
console.log(f&&t);
console.log(f&&f);

console.log("============================");

// OR연산
console.log(t||t);
console.log(t||f);
console.log(f||t);
console.log(f||f);

console.log("===========================");

// 놀이기구를 타려면 키가 145이상이어야하고, 나이가 8세 이상이어야 함
var height = 150;
var age = 15;
console.log(`놀이기구 탑승 여부: ${height >= 145 && age >= 8}`);


// NOT연산 (단항 연산자)
console.log("============================");

console.log(!true);
console.log(!false);

//hasMoney() 함수: 돈이 있으면 true,돈이 없으면 false를 반환
if (hasMoney()){}