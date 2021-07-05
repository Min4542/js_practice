console.log('방정식 4x + 5y = 60의 해는:');
for (x = 1; x <= 10; x++) {
    for (y = 1; y <= 10; y++) {
        if (4*x + 5*y === 60) {

            console.log(`(${x},${y})`);
        }
    }
}
console.log('이다.');