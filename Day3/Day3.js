const fs = require('fs')

fs.readFile('day3.txt', (err, data) => {
    if (err) throw err;
    inputData = data.toString().split('\n');
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let totalPriority = 0;

    for (let i = 0; i < inputData.length; i++) {
        let skip = false;
        let firstHalf = inputData[i].split('').slice(0, inputData[i].length / 2)
        let secondHalf = inputData[i].split('').slice(inputData[i].length / 2);
        
        firstHalf.forEach(element => {
            if (secondHalf.includes(element)) {
                // Find 'priority', and add to total
                if (skip == false) {
                    totalPriority += alphabet.indexOf(element) + 1;
                    skip = true;
                }
            }
            // Otherwise ignore
        });
    }

    console.log(totalPriority)
});
