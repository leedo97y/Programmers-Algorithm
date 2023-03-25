const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

let star = "*";
let answer = [];

let joinAns; 

rl.on('line', function (line) {
    input = line.split(' ');
    let num = Number(input[0]);
    for (let count = 1; count <= num; count++) {
        answer.push(star);
        star += "*";
    }
    
    joinAns = answer.join("\n");
        
    
    
}).on('close', function () {
    console.log(joinAns);
});