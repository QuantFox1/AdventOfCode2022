const fs = require('fs')

fs.readFile('day3.txt', (err, data) => {
    if (err) throw err;
    inputData = data.toString().split('\n');
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let totalPriority = 0;
    let groupArray = [];

    for (let i = 0; i < inputData.length + 1; i++) {
        if (groupArray.length < 3) {
            groupArray.push(inputData[i]);
        }

        else if (groupArray.length == 3) {
            let skip = false;
            groupArray.forEach((row) => {
                row = row.split('');
            });

            for (let x = 0; x < groupArray.length; x++) {
                for (let y = 0; y < groupArray[x].length; y++) {
                    if (skip == false && groupArray[0].includes(groupArray[x][y]) && groupArray[1].includes(groupArray[x][y]) && groupArray[2].includes(groupArray[x][y])) {
                        totalPriority += alphabet.indexOf(groupArray[x][y]) + 1;
                        skip = true;
                    }
                }
            }

            groupArray = [];
            groupArray.push(inputData[i])
        } 

    }
    console.log(totalPriority)
});
