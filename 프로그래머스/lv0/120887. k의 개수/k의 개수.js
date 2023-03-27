function solution(i, j, k) {
    const aArr = [];
    for (let a = i; a <= j; a++) {
        aArr.push(a);
    }
    
    const arrIntoStr = aArr.join("");
    
    
    let count = 0;
    for (let n = 0; n < arrIntoStr.length; n++) {
        if (arrIntoStr[n] === k.toString()) {
            count += 1;
        }
    }
   
    return count;
}