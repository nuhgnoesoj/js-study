
var x = 1;

for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 4; j++) {
        for (var k = 0; k < 2; k++) {
            console.log(`hello${x++}`);
        }
    }
    // console.log();
}

console.log('====================');




// 구구단 2단 출력


for (var level = 2; level <= 9; level++) {

    for (var line = 1; line <= 9; line++) {
        console.log(`${level} x ${line} = ${level * line}`);
    }
    console.log('===========================');

}




// while (line <= 9) {
//     console.log(`3 x ${line} = ${3 * line}`);
//     line++;
// }

console.log(`3 x ${line} = ${3 * line}`);
line++;
console.log(`3 x ${line} = ${3 * line}`);
line++;
console.log(`3 x ${line} = 9`);
console.log('3 x 4 = 12');
console.log('3 x 5 = 15');
console.log('3 x 6 = 18');
console.log('3 x 7 = 21');
console.log('3 x 8 = 24');
console.log('3 x 9 = 27');