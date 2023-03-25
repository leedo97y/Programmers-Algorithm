function solution(num, k) {
    const splitedArr = num.toString().split("");
    const strK = k.toString();
    
    const a = splitedArr.indexOf(strK);
    if (a !== -1) {
        return a + 1;
    } 
    return -1;
    
    
}