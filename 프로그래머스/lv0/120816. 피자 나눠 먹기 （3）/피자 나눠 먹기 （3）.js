function solution(slice, n) {
    
    
    let num = Math.floor(n / slice);
    let lastNum = n % slice;
    
    if (lastNum === 0) {
       return num
    }
    return num + 1;
    
    
     // console.log(num, lastNum)
    
    
}