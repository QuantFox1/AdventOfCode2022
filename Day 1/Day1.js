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

    console.log(Math.max(...Object.values(elfObj)))
});

