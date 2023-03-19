// function solution(n) {
    
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             let multi = 6 * i;
//             let multiN = n * j;
            
        
//             if (multiN === multi) {
//                 return i;
//             }
//         }
        
//     }
// }

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function solution(n) {
    let lcmValue = lcm(n, 6);
    return lcmValue / 6;
}