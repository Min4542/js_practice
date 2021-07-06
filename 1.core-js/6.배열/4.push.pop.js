

var foods = ['닭강정','볶음밥','피자'];
console.log(foods);

var lastElemenst=foods.pop();
console.log(`제거된 요소:${lastElemenst}`);
console.log(foods);



foods.push('파스타');
foods.push('족발');
console.log(foods);


var firstElement=foods.shift();
console.log(`제거된 요소:${firstElement}`);
console.log(foods);

foods.unshift('떡볶이');
console.log(foods);