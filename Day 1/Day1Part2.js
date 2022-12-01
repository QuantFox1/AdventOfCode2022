const fs = require('fs');
let inputData = "";

fs.readFile('day1.txt', (err, data) => {
    if (err) throw err;
    inputData = data.toString().split('\n');
    let elfObj = {};
    let elfNum = 0;
    let calories = 0;
    for (let i = 0; i < inputData.length; i++) {
        if (inputData[i] != '') {
            calories = calories + parseInt(inputData[i]);
        } else {
            elfObj[elfNum] = calories
            calories = 0;
            elfNum += 1;
        }
    }

    let elfArr = [];
    for (var elf in elfObj) {
        elfArr.push([elf, elfObj[elf]])
    }

    elfArr.sort(function(a, b) {
        return b[1] - a[1];
    });

    let count = 0;
    for (let i = 0; i < 3; i++) {
        count += elfArr[i][1];
    }
    console.log(count)
});

