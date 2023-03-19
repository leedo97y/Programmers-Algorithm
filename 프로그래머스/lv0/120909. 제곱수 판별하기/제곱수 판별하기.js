function solution(n) {
    const sqrtN = Math.sqrt(n);
    if (Math.floor(sqrtN) ** 2 === n) {
        return 1;
    }
    return 2;
    
}